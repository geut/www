import React from 'react'
import anime from 'animejs'

import Logo from './logo'
import Link from 'nextein/link'

const scrollAnimated = (event) => {
  const { target } = event
  const { hash } = new URL(target.href)
  
  const refId = hash.replace('#', '')

  const targetSection = document.querySelector(`[id=${refId}]`)
  if (targetSection) {
    event.preventDefault()
    const { top } = targetSection.getBoundingClientRect()
    const scrollCoords = {
      y: window.pageYOffset
    }
  
    anime({
      targets: scrollCoords,
      y: ((top + window.pageYOffset)),
      duration: 350,
      easing: 'easeInOutQuad',
      update: () => {
        window.location.hash = hash
        window.scroll(0, scrollCoords.y)
      }
    })
  }
}

export default ({ main = false, top = false, ...props }) => (  
  <nav role="navigation" {...props}>
    <ul>
      {top && (
        <li className="logo">
          <a href="/"><Logo className="logo" width="80px" opacity={1}/></a>
        </li>)}
      <li className="mission"><Link href="/#our-mission"><a onClick={scrollAnimated}>Mission</a></Link> </li>
      <li className="about"><Link href="/#about-us"><a  onClick={scrollAnimated}>About Us</a></Link></li>
      <li className="contact"><Link href="/#contact-us"><a  onClick={scrollAnimated}>Contact</a></Link></li>
      <li className="blog"><Link href="/blog"><a>Blog</a></Link></li>
    </ul>
    <style jsx>{`
      nav ul {
        padding: 0;
        ${top ? `
          margin: calc(var(--spacing) * 4) 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;        
        `: ''}
      }

      nav li {
        list-style: none;
        display: inline-block;        
        ${ main ? `
          font-size: 4vmin;
          margin: 1vw 1.8vw;        
        ` : `
          flex: 1 0 auto;
          display: block;
          text-align: right;        
        `}
      }

      nav li a {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--violet);
        font-weight: ${main ? 200 : 600};
      }

      nav li.logo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        flex: 6 0 auto;
      }

      @media screen and (max-width: 680px) {
        nav ul {
          font-size: .85em;
        }

        nav li.mission,
        nav li.about {
          display: none;
        } 
      }

    `}</style>
  </nav>
)
