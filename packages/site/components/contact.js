import React, { Component } from 'react'
import * as yup from 'yup'

import Section from './section'
import { Button } from './elements'

export default class Contact extends Component {
  schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    company: yup.string(),
    comment: yup.string().required()
  })

  state = {
    name: '',
    email: '',
    company: '',
    comment: '',
    sent: false,
    error: undefined
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: undefined
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
    const { name, email, company, comment, sent, error } = this.state
    return (
      <Section title="Contact US" subtitle="Get in touch">
        <div className="grid-1-center container">
          <div className="col-6_sm-12-middle contact-form">
            {!sent &&
              <form className="grid-1">
                <div className={`col-12_sm-12-middle field ${error && error.path==="name" ? "error" : ""}`}>
                  <input type="text" name="name" placeholder="name*" value={name} onChange={this.onChange}/>
                  {error && error.path==="name" && <span className="error-message">{error.message}</span>}
                </div>
                <div className={`col-12_sm-12-middle field ${error && error.path==="email" ? "error" : ""}`}>
                  <input type="text" name="email" placeholder="email*" value={email} onChange={this.onChange}/>
                  {error && error.path==="email" && <span className="error-message">{error.message}</span>}
                </div>
                <div className="col-12_sm-12-middle field">
                  <input type="text" name="company" placeholder="company" value={company} onChange={this.onChange}/>
                </div>
                <div className={`col-12_sm-12-middle field ${error && error.path==="comment" ? "error" : ""}`}>
                  <textarea name="comment" placeholder="comment*" rows="4" value={comment} onChange={this.onChange}></textarea>
                  {error && error.path==="comment" && <span className="error-message">{error.message}</span>}
                </div>
                <div className="col-12_sm-12-middle button">
                  <Button type="button" variant="highlight" onClick={this.onSubmit}>
                    <span>Send my <b>question</b></span>
                  </Button>
                </div>
              </form>
            }
            {sent &&
              <div>
                <h1>Thank you for contacting us <i className="fa fa-envelope" aria-hidden="true"></i></h1>
                <h2>We'll be in touch as soon as possible.</h2>
              </div>
            }
          </div>
        </div>
        <style jsx>{`
          .container {
            flex: 1;
          }
          .field {
            display: flex;
            flex-direction: column;            
          }
          .field input:-webkit-autofill {
            box-shadow: 0 0 0 1000px var(--grey) inset !important;
          }
          .field input[type="text"],
          .field textarea {
            flex: 1;
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
            border: solid 1px var(--red);
            border-bottom: solid 2px var(--red);
          }

          .button {
            display: flex;
          }

          .button :global(button) {
            flex: 1;
          }

          .error-message {
            font-size: 0.8em;
            color: var(--red);
            margin: 5px;
            display: block;
          }
        
        `}</style>
      </Section>
    )
  }
}
