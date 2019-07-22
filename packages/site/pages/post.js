import React, { Component } from 'react'
import compose from 'lodash.flowright'
import withPost, { Content } from 'nextein/post'

import Navigation from '../components/navigation'
import Meta from '../components/blog/meta'
import { Anchor, Code, Blockquote, Heading2, Heading3, Heading4, Paragraph, Pre, List, ListItem } from '../components/elements'
import Footer from '../components/footer'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <React.Fragment>
        <section className="hero container">
          <Navigation top />
          <header>
            <h1>{post.data.title}</h1>
            <p>{post.data.subtitle}</p>
            <Meta {...post.data} />
          </header>
        </section>
        <section key={post.data.url} className="container post">
          <Content
            {...post}
            className="content"
            renderers={{
              a: Anchor,
              code: Code,
              blockquote: Blockquote,
              h2: Heading2,
              h3: Heading3,
              h4: Heading4,
              p: Paragraph,
              pre: Pre,
              ul: List,
              ol: List,
              li: ListItem
            }}
          />
        </section>
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
            margin-top: calc(var(--spacing) * 8);
            overflow: hidden;
            display: flex;            
            justify-content: center;
            flex-direction: column;
          }

          header h1 {
            margin: 0;
            letter-spacing: -.03em;
            line-height: 1em;
            font-size: 5em;
            font-weight: 400;
            color: var(--violet);
          }

          header p {
            color: var(--grey600);
            font-weight: 100;
            font-size: 1.8em;
            padding: 0.5rem;
            border: 0px;
          }
          
          .post {
            max-width: 780px;
            margin: calc(var(--spacing) * 4) auto;
            padding: calc(var(--spacing) * 6);
          }

          @media screen and (max-width: 680px) {
            header h1 {
              font-size: 3.5em;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default compose(
  withPost
)(Post)
