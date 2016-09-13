
const defineRoute = (server, route) => {
    server.route(route);
};

const withServer = (server) => (method) => (template, ...configs) => {
    const path = template.join('').trim();
    defineRoute(server, Object.assign({ method, path }, ...configs));
};

export default (server) => {
    const method = withServer(server);

    return {
        POST: method('POST'),
        GET: method('GET'),
        UPDATE: method('UPDATE'),
        DELETE: method('DELETE')
    };
};
