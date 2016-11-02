export default [
    {
        method: 'POST',
        path: '/contact',
        ...require('../actions/contact')
    },
    {
        method: 'GET',
        path: '/generate',
        handler: function (request, reply) {
            return reply({ crumb: request.server.plugins.crumb.generate(request, reply) });
        }
    }
];
