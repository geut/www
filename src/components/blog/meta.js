
import React, { Component } from 'react'
import { format, parse } from 'date-fns'

import Author from './author'
import Tags from './tags'

import authors from '../../authors'

export default class Meta extends Component {

  render() {
    const { author, tags = [], date } = this.props

    const allAuthors = [].concat(author)
      .map(postAuthor => authors[postAuthor] || { name: postAuthor })

    return (
      <React.Fragment>
        <div className="inline">
          {allAuthors.map(author => <Author key={author.name} {...author} /> )}
        </div>
        <div className="inline">
          <div className="date">{format(parse(date), 'MMMM D, YYYY')}</div>
          <Tags tags={tags} />
        </div>
        <style jsx>{`
          .inline {
            display: inline-flex;
            align-items: center;
            margin: var(--spacing) 0;
          }
          .date {
            margin: var(--spacing) 0;
            color: var(--grey500);
          }

          @media screen and (max-width: 680px) {
            .inline {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin: var(--spacing) 0;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}

