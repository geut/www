
// npm packages
import glue from 'glue';
import handlebars from 'handlebars';
// node
import Path from 'path';
// ours
import config from './config';

// variables
const options = {
    relativeTo: __dirname
};

glue.compose(config, options, (err, server) => {
    if (err) return;

    server.views({
        engines: { html: handlebars },
        path: Path.join(__dirname, '/templates'),
        layoutPath: Path.join(__dirname, '/templates/layouts')
    });

    server.start((error) => {
        if (error) throw error;
        console.log(`Server running at: ${server.info.uri}`);
    });

});
