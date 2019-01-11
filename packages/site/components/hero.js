import React, { Component } from 'react'

import Logo from './logo'
import Navigation from './navigation'

import { name } from '../site'

export default class Hero extends Component {
  render() {
    return (
      <section>
        <header>
          <Logo width="70vmin" />
          <h1>{name}</h1>
        </header>
        <Navigation className="nav"/>

        <style jsx>{`
          section {
            height: 100vh;
            text-align: center;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
    
          h1 {
            --letter-spacing: 7vmin;
            margin: calc(.5 * var(--letter-spacing));
            margin-right: calc(-.5 * var(--letter-spacing));
            font-weight: 200;
            font-family: "ETH Sans";
            font-size: 16vmin;
            letter-spacing: var(--letter-spacing);
            color: var(--violet);
            text-align: center;
          }

          .nav {
            opacity: 0;
          }
        `}</style>
      </section>
    )
  }
}
