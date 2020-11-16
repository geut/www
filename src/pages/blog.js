import React, { Component } from 'react'
import compose from 'lodash.flowright'
import { withPostsFilterBy, inCategory, sortByDate } from 'nextein/posts'
import Content from 'nextein/content'
import Link from 'nextein/link'

import Navigation from '../components/navigation'
import { Paragraph, Heading2, Anchor } from '../components/elements'
import Meta from '../components/blog/meta'
import Footer from '../components/footer'

class Blog extends Component {
  render() {
    const { posts } = this.props

    posts.sort(sortByDate)

    return (
      <React.Fragment>
        <section className="hero container">
          <Navigation top />
          <header>
            <h1>THE <span>GEUT</span> BLOG</h1>
            <p>News, Announcements, and Our Take in the World of Words, Examples and Opinions.</p>
          </header>
        </section>
        {posts.map(post => {
          return (
            <section key={post.data.url} className="container post">
              <Link {...post}><a><Heading2>{post.data.title}</Heading2></a></Link>
              <p>{post.data.subtitle}</p>
              <Meta {...post.data} />
              <Content
                {...post}
                className="content"
                excerpt
                renderers={{
                  a: Anchor,
                  p: Paragraph
                }}
              />
            </section>
        )
        })}
        <Footer />
        <style jsx>{`
          .container {
            width: 70vw;
            margin: 0 auto;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .container.hero {
            min-height: 50vh;
          }

          header {
            min-height: 50vh;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          header h1 {
            --letter-spacing: .3em;
            letter-spacing: var(--letter-spacing);
            font-size: 5em;
            color: var(--violet);
          }

          header h1 span {
            font-family: var(--font-family-geut);
            display: inline-block;
            color: #fafafa;
            background: var(--violet);
            box-shadow: -8px -5px 0px 8px var(--violet);
          }

          header p {
            padding: var(--spacing);
            color: var(--grey600);
            font-weight: 100;
            font-size: 1.8em;
            border: 0px;
          }

          .post {
            max-width: 780px;
            margin: calc(var(--spacing) * 4) auto;
            padding: calc(var(--spacing) * 6);
            background: var(--grey50);
            box-shadow: 0 4px 8px var(--grey100);
          }

          .post :global(h2) {
            margin: 0;
            font-weight: 400;
          }

          .post p {
            margin-top: var(--spacing);
            color: var(--grey700);
            font-weight: 400;
            font-size: 1.2em;
          }

          .post :global(img.intro) {
            float: right;
            margin: 0px 0px 15px 15px;
          }

          @media screen and (max-width: 680px) {
            header h1 {
              font-size: 4.5em;
            }

            header p {
              font-size: 1.35em;
            }

            .post :global(img.intro) {
              float: none;
            }
          }

        `}</style>
      </React.Fragment>
    )
  }
}

export default compose(
  withPostsFilterBy(inCategory('blog'))
)(Blog)
