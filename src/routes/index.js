
import router from '../lib/router';

export const register = (server, options, next) => {
    const { GET } = router(server);

    const home      = { handler: { markdown: { template: 'main.html', sections:['philosophy.md', 'about.md', 'section.md'] } } };
    const about     = { handler: { markdown: { template: 'section.html', path: 'about.md' } } };
    const section   = { handler: { markdown: { template: 'section.html', path: 'section.md' } } };

    const resources = { handler: { directory: { path: '_resources' } } };

    GET `/        ${home}`;
    GET `/about   ${about}`;
    GET `/section ${section}`;

    // public resources (css, images, etc)
    GET `/resources/{path*} ${resources}`;

    next();
};

register.attributes = {
    name: 'routes'
};
