import { default as schema } from '../schemas/contact';

export default {
    config: {
        validate: {
            payload: schema
        }
    },
    handler(request, reply) {
        reply({
            status: 'success'
        });
    }
};
