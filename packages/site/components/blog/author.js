
import React, { Component } from 'react'

export default class Author extends Component {

  render() {
    const { name, twitter, github, avatar } = this.props

    return (
      <div className="inline">
        <div className="avatar"><img src={avatar}/></div>
        <div className="name">{name}</div>
        <style jsx>{`
          .inline {
            display: inline-flex;
            align-items: center;
          }

          .avatar {
            padding: calc(var(--spacing) * .25)
          }

          .avatar img{
            width: 35px;
            border: 2px solid var(--grey50);
            border-radius: 50%;
            box-shadow: 0 2px 2px rgba(0,0,0, .2);
          }

          .name {
            margin: var(--spacing);
          }
        `}</style>
      </div>
    )
  }
}

