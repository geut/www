import React from 'react'
import { Content } from 'nextein/post'

import Section from './section'
import GitHub from './icons/github'
import Twitter from './icons/twitter'

const sortByIsFounder = ({ data: { founder: a = false } }, { data: { founder: b = false } }) => Number(b) - Number(a)

const About = ({ members, authors }) => {
  const team = members.sort(sortByIsFounder)
  return (
    <Section title="About Us" subtitle="Meet the Team">
      <div className="grid-equalHeight">
        {team.map((member) => {
          const { data: { name, title, role, founder } } = member
          const { twitter, github, avatar } = authors[name]
          return (
            <div className="col-3_md-6_sm-12" key={name}>
              <section>
                <header className="grid-center-noGutter">
                  <p className="avatar"><img src={avatar} /></p>
                  <h2 className="col-12">{founder && 'Founder. '}{role}</h2>
                  <h1 className="col-12">{title}</h1>
                  <ul className="col-12 grid-center grid-middle social">
                    <li className="">
                      <a href={`https://github.com/${github}`} title={`GitHub account ${github}`} target="_blank" rel="nofollow">
                        <GitHub width={24} />
                      </a>
                    </li>
                    <li className="">
                      <a href={`https://twitter.com/${twitter}`} title={`Twitter account ${twitter}`} target="_blank" rel="nofollow">
                        <Twitter width={24} />
                      </a>
                    </li>
                  </ul>
                </header>
                <div className="team-member">
                  <Content {...member} />
                </div>
              </section>
            </div>
          )
        })}
      </div>
      <style jsx>{`
      section {
        background: #f0f0f0;
        border-top: 8px solid;
        border-top-color: var(--blue);
        transition: transform .1s;
      }      

      section:hover{
        border-top-color: var(--green);
        box-shadow: 0px 4px 6px 0 rgba(0,0,0,.3);
        transform: scale(1.05);
      }

      section a {
        color: var(--action-color);
      }

      h1 {
        font-size: 1em;
        margin: 0;
        margin-bottom: .5em;
        text-transform: uppercase;
      }

      h2 {
        font-size: .7em;
        font-weight: 100;
        text-transform: uppercase;
        margin: 0;
        padding: 0;
        color: var(--grey600);
      }

      .avatar {
        margin-top: 0;
      }

      .avatar img{
        display: block;
        height: 100%;
        width: 100%;
      }

      .team-member {        
        padding: 1em;
        font-size: .85em;
        font-weight: 200;
        color: var(--grey600);
      }

      .social li {
        list-style: none;
        margin: 0 calc(var(--spacing) * .5);
      }

      .social li :global(svg) {
        fill: var(--action-color);
        vertical-align: middle;
      }
    `}</style>
    </Section>
  )
};

export default About;
