require('dotenv').config();

// npm packages
import glue from 'glue';
import handlebars from 'handlebars';
import Confidence from 'confidence';

const store = new Confidence.Store();
store.load(require('./config'));

// variables
const options = {
    relativeTo: __dirname
};

glue.compose(store.get('/', { env: process.env.NODE_ENV }), options, (err, server) => {
    if (err) return;

    server.views({
        engines: { html: handlebars },
        path: '_templates',
        layoutPath: '_templates/layouts',
        partialsPath: '_templates/partials'
    });

    server.start((error) => {
        if (error) throw error;
        console.log(`Server running at: ${server.info.uri}`);
    });

});
