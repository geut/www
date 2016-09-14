
import router from '../lib/router';

export const register = (server, options, next) => {
    const { GET } = router(server);

    const home      = { handler: { markdown: '_site/index' } };
    const about     = { handler: { markdown: '_site/about' } };
    const resources = { handler: { directory: { path: '_resources' } } };

    GET `/resources/{v*} ${resources}`; // public resources (css, images, etc)

    GET `/               ${home}  `;
    GET `/about          ${about} `;

    next();
};

register.attributes = {
    name: 'routes'
};
