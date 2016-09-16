
// node
import Fs from 'fs';
import Path from 'path';

// npm
import MarkdownIt from 'markdown-it';
import fm from 'front-matter';

const md = new MarkdownIt();

const internals = {
    cached: {}
};

const createContext = (route, page) => {
    const { content, attributes } = page;
    const uri = route.path;
    return {
        page: {
            ...attributes,
            content,
            uri
        }
    };
};

export const register = (server, opts, next) => {

    server.handler('markdown', (route, options) => {
        if ( typeof options === 'string' ) {
            options = { path: options };
        }
        const { path, template = 'index.html', layout = 'default' } = options;

        Fs.readFile(Path.resolve(`${path}.md`), 'utf8', (err, data) => {
            if ( err ) {
                throw Error(`Cannot read markdown: ${path}`);
            }
            const page = fm(data);
            page.content = md.render(page.body);

            internals.cached[path] = createContext(route, page);
        });

        return (request, reply) => {
            reply.view(template, internals.cached[path], { layout });
        };
    });

    next();
};

register.attributes = {
    name: 'markdown-handler',
    version: '1.0.0'
};
