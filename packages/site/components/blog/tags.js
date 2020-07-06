
import React, { Component } from 'react'

export default class Tags extends Component {

  render() {
    const { tags = [] } = this.props

    return (
      <div className="inline">
        {tags.map(tag => (
          <div className="tag" key={tag}>{tag}</div>
        ))}
        <style jsx>{`
          .inline {
            display: inline-flex;
            align-items: center;
          }

          .tag {
            margin: calc(var(--spacing) * .5);
            padding: calc(var(--spacing) * 1);
            line-height: 1.2em;
            background-color: var(--violet);
            color: var(--grey200);
            font-size: .9em;
            font-weight: 400;
          }
        `}</style>
      </div>
    )
  }
}

