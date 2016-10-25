import router from '../lib/router';

export const register = (server, options, next) => {
    const { GET, POST } = router(server);

    const home      = { handler: { markdown: { template: 'main.html', sections:['philosophy.md', 'about.md', 'section.md'] } } };
    const contact   = require('../actions/contact');
    const resources = { handler: { directory: { path: '_resources' } } };

    GET `/        ${home}`;
    POST `/contact ${contact}`;

    // public resources (css, images, etc)
    GET `/resources/{path*} ${resources}`;

    next();
};

register.attributes = {
    name: 'routes'
};
