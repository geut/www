import React, { Component } from 'react'

import Section from './section'
import { mail } from '../site'

export default class Contact extends Component {
  render() {
    return (
      <Section title="Contact US" subtitle="Get in touch" className="contact">
        <div className="grid-1 container">
            <div className="col-12">            
              <h1>{mail}</h1>
              <p> Drops Us a Line. <b>We would Love to Hear from You.</b></p>
            </div>
        </div>
        <style jsx>{`
          :global(section.contact) {
            min-height: 50vh;
          }

          .container {
            flex: 1;
          }
          
          h1 {
            font-weight: bold;
            font-size: 3em;
            color: var(--blue);
          }

          p {
            margin-top: -2em;
            color: var(--grey600);
          }
          @media screen and (max-width: 1024px) {
            h1 {
              font-size: 2em;
            }
          }
          @media screen and (max-width: 680px) {
            h1 {
              font-size: 1.2em;
            }
            p {
              margin-top: -1em;
            }
          }

        `}</style>
      </Section>
    )
  }
}
