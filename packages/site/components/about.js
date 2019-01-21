import React from 'react'
import { Content } from 'nextein/post'

import Section from './section'

const sortByIsFounder = ({ data: { founder: a = false } }, { data: { founder: b = false } }) => Number(b) - Number(a)

export default ({ members }) => {
  const team = members.sort(sortByIsFounder)
  return (
    <Section title="About Us" subtitle="Meet the Team">
      <div className="grid-equalHeight">
        {team.map((member) => {
          const { data: { name, title, twitter, github, role, avatar, founder } } = member
          return (
            <div className="col-3_md-6_sm-12" key={name}>
              <section>
                <header className="grid-center-noGutter">
                  <p className="avatar"><img src={avatar} /></p>
                  <h2 className="col-12">{founder && 'Founder. '}{role}</h2>
                  <h1 className="col-12">{title}</h1>
                  <ul className="col-12 grid-center grid-middle social">
                    <li className="col-1">
                      <a href={`https://github.com/${github}`} title={`GitHub account ${github}`} target="_blank" rel="nofollow">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="col-1">
                      <a href={`https://twitter.com/${twitter}`} title={`Twitter account ${twitter}`} target="_blank" rel="nofollow">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
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
      }
      .team-member {
        padding: 1em;
        font-size: 1em;
        color: #666;
      }
      section:hover{
        border-top-color: var(--green);
        box-shadow: 0px 4px 6px 0 rgba(0,0,0,.3);
        transform: scale(1.01);
      }

      h1 {
        font-size: 1.2em;
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
        color: #999;
      }
      .avatar {
        margin-top: 0;
      }
      .avatar img{
        display: block;
        height: 100%;
        width: 100%;
      }
    `}</style>
    </Section>
  )
}
