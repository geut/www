


const withServer = (server) => (method) => (template, ...configs) => {
    const path = template.join('').trim();
    const route = Object.assign({ method, path }, ...configs);
    server.route(route);
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
