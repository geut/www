
// node
import Fs from 'fs';
import Path from 'path';

// npm
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const internals = {
    cached: {},

    createContext(path, route) {
        return {
            page: {
                uri: route.path,
                content: internals.cached[path]
            }
        };
    }
};

export const register = (server, opts, next) => {

    server.handler('markdown', (route, options) => {
        if ( typeof options === 'string' ) {
            options = { path: options };
        }
        const { path, template = 'index.html', layout = 'default' } = options;

        Fs.readFile(Path.resolve(`${path}.md`), (err, data) => {
            if ( err ) throw Error(`Cannot read markdown: ${path}`);

            internals.cached[path] = md.render(data.toString('utf8'));
        });

        return (request, reply) => {
            reply.view(template, internals.createContext(path, route), { layout });
        };
    });

    next();
};

register.attributes = {
    name: 'markdown-handler',
    version: '1.0.0'
};
