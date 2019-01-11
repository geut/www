import React, { Component } from 'react'
import * as yup from 'yup'

import Section from './section'

export default class Contact extends Component {
  schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    company: yup.string(),
    comment: yup.string().required()
  })

  state = {
    honeypot: '',
    name: '',
    email: '',
    company: '',
    comment: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async () => {    
    try {
      const value = await this.schema.validate(this.state)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      })
      const { status } = await response.json()

      this.setState({
        sent: status === 'success' ? true : false
      })

    } catch (err) {
      this.setState({
        error: err
      })
    }
  }

  render() {
    const { honeypot, name, email, company, comment, sent } = this.state
    return (
      <Section title="Contact US" subtitle="Get in touch">
        <div className="grid-1-center container">
          <div className="col-6_sm-12-middle contact-form">
            {!sent &&
              <form className="grid-1">
                <div style={{display: "none"}}>
                  <input type="text" id="honeypot" name="honeypot" value={honeypot}/>
                </div>
                <div className="col field">
                  <input type="text" id="name" name="name" placeholder="name*" value={name} onChange={this.onChange}/>
                </div>
                <div className="col field">
                  <input type="text" id="email" name="email" placeholder="email*" value={email} onChange={this.onChange}/>
                </div>
                <div className="col field">
                  <input type="text" id="company" name="company" placeholder="company" value={company} onChange={this.onChange}/>
                </div>
                <div className="col field">
                  <textarea id="comment" name="comment" placeholder="comment*" rows="4" value={comment} onChange={this.onChange}></textarea>
                </div>
                <div className="col">
                  <button type="button" className="send btn btn--m btn--black">
                    Send my <b>question</b>
                  </button>
                </div>
              </form>
            }
            {sent &&
              <div>
                <h1>Thank you for contacting us <i class="fa fa-envelope" aria-hidden="true"></i></h1>
                <h2>We'll be in touch as soon as possible.</h2>
              </div>
            }
          </div>
        </div>
        <style jsx>{`
          .container {
            flex: 1
          }
          .field input:-webkit-autofill {
            box-shadow: 0 0 0 1000px var(--grey) inset !important;
          }

          .field input[type="text"], .field textarea {
            display: block;
            margin: 0;
            width: 100%;
            font-size: 18px;
            appearance: none;
            box-shadow: none;
            border-radius: none;
            padding: 10px;
            border: solid 1px #dcdcdc;
            border-bottom: solid 2px #c9c9c9;
            transition: border 0.3s;
          }
          .field input[type="text"]:focus, .field textarea:focus {
            outline: none;
            border-bottom: solid 2px black;
          }

          .field.error input, .field.error textarea {
            border: solid 1px color( var(--red) l(80%) );
            border-bottom: solid 2px color( var(--red) l(75%) );
          }

          .field.error .error-message {
            font-size: 0.8em;
            color: color( var(--red) l(50%) );
            margin: 5px;
            display: block;
          }
        
        `}</style>
      </Section>
    )
  }
}
