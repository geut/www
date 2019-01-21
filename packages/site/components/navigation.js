import React from 'react'
import anime from 'animejs'

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

export default props => (
  <nav role="navigation" {...props}>
    <ul>
      <li><a href="#our-mission" onClick={scrollAnimated}>Mission</a></li>
      <li><a href="#about-us" onClick={scrollAnimated}>About Us</a></li>
      <li><a href="#contact-us" onClick={scrollAnimated}>Contact</a></li>
    </ul>
    <style jsx>{`
      nav li {
        font-size: 4vmin;
        margin: 1vw 1.8vw;
      }

      nav li a{
        text-decoration: none;
        color: var(--violetDark);
        font-weight: 100;
      }    
    `}</style>
  </nav>
)
