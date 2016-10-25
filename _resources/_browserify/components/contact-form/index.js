import 'whatwg-fetch';
import velocity from 'velocity-animate';
import { default as schema } from 'contact';

function send(data) {
    return new Promise((resolve, reject) => {
        schema.validate(data, { abortEarly: false }, (err, values) => {
            if (err) return reject(err);

            resolve(values);
        });
    })
    .then((values) => {
        return fetch('/contact', {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-Token': values._token
            },
            body: JSON.stringify(values)
        })
    })
    .then(response => response.json());
}

function serialize(form) {
    const map = {
        _token: form.dataset.token
    };

    for (let elem of form.querySelectorAll('.field > *')) {
        map[elem.name] = elem.value;
    }

    map['honeypot'] = form.querySelector('[name="honeypot"]').value;

    return map;
}

function cleanErrors(form) {
    for (let elem of form.querySelectorAll('.field.error')) {
        elem.classList.remove('error');
        elem.removeChild(elem.querySelector('.error-message'));
    }
}

function showErrors(form, e) {
    if (e.details) {
        e.details.forEach((error) => {
            const input = form.querySelector(`.field [name=${error.path}]`);
            if (input && !input.parentNode.classList.contains('error')) {
                input.parentNode.classList.add('error');
                input.insertAdjacentHTML('afterend', `<span class="error-message">${error.message}</span>`);
            }
        })
    }
}

export default function contactForm() {
    const contactForm = document.querySelector('.contact-form');
    const form = contactForm.querySelector('form');
    const btnSend = form.querySelector('.send');

    btnSend.addEventListener('click', (e) => {
        e.preventDefault();

        cleanErrors(form);

        btnSend.setAttribute('disabled', 'disabled');

        const data = serialize(form);

        send(data)
            .then(() => velocity(contactForm, 'fadeOut'))
            .then(() => {
                contactForm.removeChild(form);
                contactForm.insertAdjacentHTML('beforeend', `
                    <h1>Thank you for contacting us <i class="fa fa-envelope" aria-hidden="true"></i></h1>
                    <h2>We'll be in touch as soon as possible.</h2>
                `);
                return velocity(contactForm, 'fadeIn');
            })
            .catch((e) => {
                showErrors(form, e);
                btnSend.removeAttribute('disabled');
            });
    });
}
