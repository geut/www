import React from 'react'

export default () => (
  <nav role="navigation">
    <ul>
      <li><a href="#mission">Mission</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
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
)
