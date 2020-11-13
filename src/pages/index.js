import React, { Component } from 'react'
import compose from 'lodash.flowright'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'
import anime from 'animejs'

import Navigation from '../components/navigation'
import Logo from '../components/logo'
import Section, { Paragraph } from '../components/section'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

import { name } from '../site'
import authors from '../authors'

const sortByOrder = ({ data: { order: a } }, { data: { order: b } }) => a - b

class Index extends Component {
  hero = React.createRef()

  componentDidMount() {
    const hero = this.hero.current

    const logo = hero.querySelector('.logo')
    const title = hero.querySelector('.title')
    const nav = hero.querySelector('.nav')

    logo.querySelectorAll('path')
      .forEach(e => {
        e.style.fillOpacity = 0
        e.style.opacity = 0
      })
    
    anime.timeline({
      easing: 'easeOutQuad'
    })
    .add({
      targets: logo,
      opacity: 1,
      delay: 0
    })
    .add({
      targets: logo.querySelectorAll('path.main'),
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: anime.stagger(10),
    })
    .add({
      targets: logo.querySelectorAll('path'),
      opacity: 1,
      fillOpacity: [0, 1],
    })
    .add({
      targets: [title, nav],
      opacity: 1,
      easing: 'easeOutSine',
      delay: anime.stagger(50),
    })
  }
  
  render() {
    const { posts } = this.props
    const sections = posts.filter(inCategory('front')).slice().sort(sortByOrder)
    const members = posts.filter(inCategory('team'))
    return (
      <React.Fragment>
        <section className="hero" ref={this.hero}>                    
          <header>
            <Logo className="logo" width="70vmin" opacity={0}/>
            <h1 className="title">{name}</h1>
            <Navigation main className="nav" style={{ opacity: 0 }}/>
          </header>          
        </section>
        {sections.map(post => (
          <Section key={post.data.name} {...post.data} className={post.data.section}>
            <Content
              {...post}
              renderers={{
                p: Paragraph
              }}
              className="grid-1-center content"
            />
          </Section>
        ))}
        <About members={members} authors={authors} />
        <Contact />
        <Footer />
        <style jsx>{` 
          header {
            height: 100vh;
            text-align: center;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          
          header h1 {
            --letter-spacing: 7vmin;
            margin: calc(.5 * var(--letter-spacing));
            margin-right: calc(-.5 * var(--letter-spacing));
            font-weight: 200;
            font-family: var(--font-family-geut);
            font-size: 16vmin;
            letter-spacing: var(--letter-spacing);
            color: var(--violet);
            text-align: center;
            opacity: 0;
          }

          :global(.mission .content) {
            margin: auto; 
            max-width: 800px;
            padding-bottom: calc(var(--spacing) * 4);
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default compose(
  withPostsFilterBy(inCategory('team')),
  withPostsFilterBy(inCategory('front'))
)(Index)


