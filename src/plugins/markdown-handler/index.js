
// node
import Fs from 'fs';
import Path from 'path';

// npm
import MarkdownIt from 'markdown-it';
import fm from 'front-matter';

const md = new MarkdownIt();

const internals = {
    cached: {},
    prefix: ''
};

// generates a descriptor object
const asType = (type) => (path) => ({ type, path });

// read a file
const read = (file) => {
    const { prefix } = internals;
    return Fs.readFileSync(Path.resolve(prefix, file), 'utf8');
};

// flatten front-matter object and render content body
const flatten = (ctx, type) => {
    return {
        type,
        ...ctx.attributes,
        content: md.render(ctx.body)
    };
};

const extract = ({ type, path }) => {
    const ctx = fm(read(path));

    return flatten( ctx, type );
};

const contextReducer = (prev = {}, desc ) => {
    const { type } = desc;

    switch (type) {
    case 'section':
        let section = prev.section || {};
        section[desc.name] = desc;
        prev.section = section;
        break;
    case 'page':
    default:
        prev[type] = desc;
        break;
    }

    return prev;
};

const cacheAs = (path, value) => {
    internals.cached[path] = value;
};

const fromCache = (path) => internals.cached[path];

// --- PLUGIN
export const register = (server, opts, next) => {
    const { prefix } = opts;
    internals.prefix = prefix;

    server.handler('markdown', (route, options) => {
        if ( typeof options !== 'object' ) {
            options = { path: options };
        }

        const { template = 'index.html', layout = 'default', path, sections = [] } = options;

        cacheAs(route.path,
            sections
                .map(asType('section'))
                .concat(asType('page')(path))
                .map(extract)
                .reduce(contextReducer, {})
        );

        return (request, reply) => {
            reply.view(template, fromCache(route.path), { layout });
        };
    });

    next();
};

register.attributes = {
    name: 'markdown-handler',
    version: '1.0.0'
};
