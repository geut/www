const crypto = require('crypto')
const { json } = require('micro')
const nodemailer = require('nodemailer')
const yup = require('yup')

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string(),
  comment: yup.string().required()
})

const transporter = process.env.MAIL_HOST ? nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE, // use SSL
  auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
  }
}) : false;

module.exports = async (request, response) => {
  const value = await json(request)
  const data =  await schema.validate(value)

  await transporter.sendMail({
    from: `Geut Studio Website <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Contact from the website - ${crypto.createHash('sha1').update(data.comment).digest('hex').substr(0, 16)}`,
    html: `
    <b>Name: </b> ${data.name} <br/>
    <b>Email: </b> ${data.email} <br/>
    <b>Company: </b> ${data.company} <br/>
    <b>Comment: </b> ${data.comment}
    `
  })

  return {
    status: 'success'
  }
  // transporter.sendMail({
  //   from: `Geut Studio Website <${process.env.MAIL_USER}>`,
  //   to: process.env.MAIL_TO,
  //   subject: `Contact from the website - ${crypto.createHash('sha1').update(request.payload.comment).digest('hex').substr(0, 16)}`,
  //   html: `
  //   <b>Name: </b> ${request.payload.name} <br/>
  //   <b>Email: </b> ${request.payload.email} <br/>
  //   <b>Company: </b> ${request.payload.company} <br/>
  //   <b>Comment: </b> ${request.payload.comment}
  //   `
  // }, (error) => {
  //   if (error) {
  //     console.log('error', {
  //       error,
  //       ...request
  //     });
  //     response.send({
  //       status: 'error',
  //       message: 'error sending the email'
  //     });
  //   } else {
  //     console.log('info', request);
  //     response.send({
  //       status: 'success'
  //     });
  //   }
  // });
}
