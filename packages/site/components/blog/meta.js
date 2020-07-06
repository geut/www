
import React, { Component } from 'react'
import { format, parse } from 'date-fns'

import Author from './author'
import Tags from './tags'

import authors from '../../authors'

export default class Meta extends Component {

  render() {
    const { author, tags = [], date } = this.props

    console.log(author)
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
          }
          .date {
            margin: var(--spacing) 0;
            color: var(--grey500);
          }

          @media screen and (max-width: 680px) {
            .inline {
              display: block;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}

