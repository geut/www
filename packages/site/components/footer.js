import React from 'react'
import Logo from './logo'
import GitHub from './icons/github'
import Twitter from './icons/twitter'

import { legal, mail, github, twitter } from '../site'

export default () => (
  <footer>
    <div className="container">
      <div className="grid-3-center-middle">
        <div className="col-4_md-5_sm-12 text-center notes">&copy; {(new Date().getFullYear())} <span className="geut">{legal}.</span> All rights reserved.</div>
        <div className="col-4_md-2_sm-12 text-center logo">
          <Logo width="80px"/>
        </div>
        <nav className="col-4_md-5_sm-12 text-center">
          <ul className="contact">
            <li>
              <a href={`https://github.com/${github}`} title={`GitHub account ${github}`} target="_blank" rel="nofollow">
                <GitHub width={16} />
              </a>
            </li>
            <li>
              <a href={`https://twitter.com/${twitter}`} title={`Twitter account ${twitter}`} target="_blank" rel="nofollow">
                <Twitter width={16} />
              </a>
            </li>
            <li>
              <a href={`mailto:${mail}`} title="Contact email">{mail}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <style jsx>{`
      footer {
        background: var(--violetDark);
        padding-top: 2rem;
        padding-bottom: 1rem;
        color: #fff;
      }

      footer > .container {
        width: 80vw;
        margin: 0 auto;
        font-size: 12px;
        font-weight: 200;
      }

      footer ul {
        margin: 0;
        padding: 0;
      }

      footer ul li {
        list-style: none;
        display: inline-block;
        padding-right: 15px;
        margin-right: 15px;
        border-right: 1px solid white;
      }

      footer ul li:last-child {
        border: none;
        margin: 0px;
      }

      footer .contact li :global(svg) {
        fill: white;
        vertical-align: middle;
      }

      footer .notes {
        text-transform: uppercase;
      }

      footer .notes .geut {
        font-family: "ETH Sans";
        font-size: 1.1em;
        font-weight: 200;
        color: var(--green);
      }

      footer a:link,
      footer a:visited { color: #fff; }
      footer a:hover   { color: var(--green); }
      footer a:active  {
        color: var(--green);
        font-weight: bold;
      }
      footer a {
        color: #fff;
        font-size: 14px;
      }
    
      .text-center {
        text-align: center;
      }
    `}</style>
  </footer>
)
