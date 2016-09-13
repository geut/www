
import router from '../lib/router';

exports.register = (server, options, next) => {
    const { GET } = router(server);
    const home = { handler: { markdown: '_site/index' } };
    const about = { handler: { markdown: '_site/about' } };

    GET `/ ${home}`; 
    GET `/about ${about}`;

    // server.route([
    //     {
    //         method: 'GET',
    //         path: '/',
    //         handler: {
    //             markdown: {
    //                 path: '_site/index' 
    //             }
    //         }
    //     },
    //     {
    //         method: 'GET',
    //         path: '/about',
    //         handler: {
    //             markdown: {
    //                 path: '_site/about' 
    //             }
    //         }
    //     }
    // ]);

    next();
};

exports.register.attributes = {
    name: 'routes'
};
