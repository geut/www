require('dotenv').config();

// npm packages
import glue from 'glue';
import Confidence from 'confidence';

const store = new Confidence.Store();
store.load(require('../config'));

// variables
const options = {
    relativeTo: __dirname
};

glue.compose(store.get('/', { env: process.env.NODE_ENV }), options, (err, server) => {
    if (err) return;

    server.route(require('./routes'));

    server.start((error) => {
        if (error) throw error;
        console.log(`Server running at: ${server.info.uri}`);
    });
});
