import React from 'react'

import Header from './header'

export * from './paragraph'

export default ({ title, subtitle, className, children}) => (
  <section className={className}>
    <div className="container">
      <Header title={title} subtitle={subtitle} />
      { children }
    </div>
    <style jsx>{`
      section {
        min-height: 100vh;
        font-weight: 300;
        font-size: 1.3em;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;

      }

      .container {
        width: 80vw;
        min-height: 100%;
        margin: 0 auto;
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      section:nth-child(2n)  {
        background-color: var(--grey);
      }

      section.mission {
        --primary-color: white;
      }

      section.mission {
        text-align: left;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.75)
          ), url(./static/images/route.jpg);
        background-position: 0 50%;
        background-size: cover;
      }
      
      @media screen and (width <= 768px) {
        section {
          height: auto;
        }

        section.mission {
          background-position: 50%;
        }
      }      
    `}</style>
  </section>
)