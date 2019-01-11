import React from 'react'

export default props => (
  <header className={props.className}>
    <h2>{props.subtitle}</h2>
    <h1>{props.title}</h1>
    <style jsx>{`
      header {
        text-align: left;
        text-transform: uppercase;
        padding-top: 2em;
        padding-bottom: 2em;
        color: var(--primary-color);
      }

      h1 {
        font-size: 1.8em;
        font-weight: 600;
        margin: 0;
      }

      h2 {
        font-weight: 200;
        font-size: 1em;
        margin: 0;
        padding: 0;
      }

    `}</style>
  </header>
)
