
import Fs from 'fs';
import Path from 'path';
import Markdown from 'markdown-it';

const md = new Markdown();

const internals = {
    cached: {},

    createContext(path) {
        return ({
            page: {
                content: internals.cached[path]
            }
        }); 
    }
}; 

exports.register = (server, opts, next) => {

    server.handler('markdown', (route, options) => {
        if ( typeof options == 'string' ) {
            options = { path: options };
        }
        const { path, template = 'index.html', layout = 'default' } = options;

        Fs.readFile(Path.resolve(`${path}.md`), (err, data) => {            
            internals.cached[path] = md.render(data.toString('utf8'));
        });

        return (request, reply) => {
            reply.view(template, internals.createContext(path), { layout });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'markdown-handler',
    version: '1.0.0'
};
