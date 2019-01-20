import React from 'react'

export default React.forwardRef((props, ref) => (
  <nav role="navigation" {...props} ref={ref}>
    <ul>
      <li><a href="#our-mission">Mission</a></li>
      <li><a href="#about-us">About Us</a></li>
      <li><a href="#contact-us">Contact</a></li>
    </ul>
    <style jsx>{`
      nav li {
        font-size: 4vmin;
        margin: 1vw;
      }

      nav li a{
        text-decoration: none;
        color: var(--violetDark);
        font-weight: 100;
      }    
    `}</style>
  </nav>
))
