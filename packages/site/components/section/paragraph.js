import React from 'react'

export const Paragraph = props => (
  <p {...props} className="col">
    {props.children}
    <style jsx>{`
       p {
        color: var(--primary-color);
        font-weight: 100;
        font-size: 1.1em;
        line-height: 1.45;
        display: inline;
        padding: 0.5rem;
        border: 0px;
      }
      
      p em {
        font-weight: 300;
        background-color: rgba(0,0,0,0.5);
        color: white;
        padding: 0.4rem 0.4rem 0.4rem 0.4rem;
        transform: skew(-6deg, 0deg);
      }    
    `}</style>
  </p>
)
