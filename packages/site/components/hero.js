import React, { Component } from 'react'
import anime from 'animejs'

import Logo from './logo'
import Navigation from './navigation'

import { name } from '../site'

export default class Hero extends Component {
  logo = React.createRef()
  header = React.createRef()
  nav = React.createRef()

  componentDidMount() {
    this.logo.querySelectorAll('path')
      .forEach(e => {
        e.style.fillOpacity = 0
        e.style.opacity = 0
      })
    
    anime.timeline({
      easing: 'easeInOutQuad'
    })
    .add({
      targets: this.logo,
      opacity: 1,
      delay: 0
    })
    .add({
      targets: this.logo.querySelectorAll('path.main'),
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: anime.stagger(300),
      // delay: (el) => { return el.getAttribute('data-start') },
      // duration: (el) => { return el.getAttribute('data-duration') }
    })
    .add({
      targets: this.logo.querySelectorAll('path'),
      opacity: 1,
      fillOpacity: [0, 1],
    })
    .add({
      targets: [this.header, this.nav],
      opacity: 1,
      delay: anime.stagger(100),
    })
  }

  render() {
    return (
      <section>
        <header>
          <Logo width="70vmin" ref={e => this.logo = e} opacity={0}/>
          <h1 ref={e => this.header = e}>{name}</h1>
          <Navigation className="nav" ref={e => this.nav = e} style={{ opacity: 0 }}/>
        </header>
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
            opacity: 0;
          }
        `}</style>
      </section>
    )
  }
}
