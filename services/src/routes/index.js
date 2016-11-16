export default [
    {
        method: 'POST',
        path: '/contact',
        ...require('../actions/contact')
    },
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            return reply('nothing here!');
        }
    }
];
