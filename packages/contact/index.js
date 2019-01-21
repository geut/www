const crypto = require('crypto')
const { json, send, sendError } = require('micro')
const nodemailer = require('nodemailer')
const yup = require('yup')

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string(),
  comment: yup.string().required()
})

const transporter = nodemailer.createTransport({
  service: 'Zoho',
  auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
  }
});

module.exports = async (request, response) => {
  const value = await json(request)

  try {  
    const { name, email, company = 'N/A', comment } =  await schema.validate(value)

    await transporter.sendMail({
      from: `Geut Studio Website <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Contact from the website - ${crypto.createHash('sha1').update(comment).digest('hex').substr(0, 16)}`,
      html: `
      <b>Name: </b> ${name} <br/>
      <b>Email: </b> ${email} <br/>
      <b>Company: </b> ${company} <br/>
      <b>Comment: </b></br>
      ${comment}
      `
    })

    send(response, 200, { status: 'success' })

  } catch (err) {
    send(response,  500, { status: 'failed', info: err })
  }

}
