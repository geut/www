import React, { Component } from 'react'
import Head from 'next/head'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'

import { name, description, url } from '../site'
import Hero from '../components/hero'
import Section, { Paragraph } from '../components/section'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const sortByOrder = ({ data: { order: a } }, { data: { order: b } }) => a - b

class Index extends Component {
  render() {
    const { posts } = this.props
    const sections = posts.filter(inCategory('front')).slice().sort(sortByOrder)
    const members = posts.filter(inCategory('team'))
    return (
      <main role="main">
        <Head>
          <title>{name}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={name} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={`${url}/static/images/logo.png`} />
        </Head>
        <Hero />
        {sections.map(post => (
          <Section key={post.data.name} {...post.data} className={post.data.section}>
            <Content
              {...post}
              renderers={{
                p: Paragraph
              }}
              className="grid-1-center"
            />
          </Section>
        ))}
        <About members={members}/>
        <Contact />
        <Footer />
      </main>
    )
  }
}

export default withPostsFilterBy(post => ( inCategory('front')(post) || inCategory('team') ))(Index)
