
// node
import Fs from 'fs';
import Path from 'path';

// npm
import MarkdownIt from 'markdown-it';
import fm from 'front-matter';
import boom from 'boom';

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
        published: true,
        ...ctx.attributes,
        content: md.render(ctx.body)
    };
};

// extract context for descriptor
const extract = ({ type, path }) => {
    const ctx = fm(read(path));

    return flatten( ctx, type );
};

const nonPublished = ( { type, published } ) => {
    return published || type === 'page';
};


// reducer to generate context object
const contextReducer = (prev, desc, idx) => {
    const { type } = desc;

    switch (type) {
    case 'section':
        let section = prev.section || {};
        let name = desc.name || idx;
        section[name] = desc;
        prev.section = section;
        break;
    case 'page':
    default:
        let page = prev.page;
        prev.page = {
            ...page,
            ...desc
        };
        break;
    }

    return prev;
};

// cache value internally
const cacheAs = (path, value) => {
    internals.cached[path] = value;
};

// retrieve context from cache for the given path
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
                .concat(path ? asType('page')(path) : [])
                .map(extract)
                .filter(nonPublished)
                .reduce(contextReducer, { page: { uri: route.path, published: true } })
        );

        return (request, reply) => {
            const ctx = fromCache(route.path);

            if (!ctx.page.published) {
                reply(boom.notFound());
            } else {
                reply.view(template, ctx, { layout });
            }

        };
    });

    next();
};

register.attributes = {
    name: 'markdown-handler',
    version: '1.0.0'
};
