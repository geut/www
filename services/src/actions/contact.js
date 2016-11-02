import Joi from 'joi';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const transporter = process.env.MAIL_HOST ? nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE, // use SSL
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
}) : false;

export default {
    config: {
        validate: {
            payload: Joi.object().keys({
                honeypot: Joi.any().valid(''),
                _token: Joi.string().required(),
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                company: Joi.string().allow(''),
                comment: Joi.string().required()
            })
        }
    },
    handler(request, reply) {
        if (transporter) {
            transporter.sendMail({
                from: `Geut Studio Website <${process.env.MAIL_USER}>`,
                to: process.env.MAIL_TO,
                subject: `Contact from the website - ${crypto.createHash('sha1').update(request.payload.comment).digest('hex').substr(0, 16)}`,
                html: `
                <b>Name: </b> ${request.payload.name} <br/>
                <b>Email: </b> ${request.payload.email} <br/>
                <b>Company: </b> ${request.payload.company} <br/>
                <b>Comment: </b> ${request.payload.comment}
                `
            }, (error) => {
                if (error) {
                    request.log('error', {
                        error,
                        ...request.payload
                    });
                } else {
                    request.log('info', request.payload);
                }
            });
        }

        reply({
            status: 'success'
        });
    }
};
