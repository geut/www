
import React, { Component } from 'react'

export default class Author extends Component {

  render() {
    const { name, twitter, github, avatar } = this.props

    return (
      <div className="inline">
        <div className="avatar">
        {avatar ? <img src={avatar}/> : <span>{name[0]}</span>}
        </div>
        <div className="name">{name}</div>
        <style jsx>{`
          .inline {
            display: inline-flex;
            align-items: center;
          }

          .avatar {
            padding: calc(var(--spacing) * .25)
          }

          .avatar img {
            width: 32px;
            border: 2px solid var(--grey50);
            border-radius: 50%;
            box-shadow: 0 2px 2px rgba(0,0,0, .2);
          }
          
          .avatar span {
            width: 32px;
            height: 32px;
            display: flex;
            overflow: hidden;
            position: relative;
            font-size: 1.25rem;
            align-items: center;
            flex-shrink: 0;
            line-height: 1;
            user-select: none;
            border-radius: 50%;
            justify-content: center;
            border: 2px solid var(--grey50);
            box-shadow: 0 2px 2px rgba(0,0,0, .2);
            text-transform: uppercase;
            color: #fff;
            background-color: var(--grey400);
          }

          .name {
            margin: var(--spacing);
          }
        `}</style>
      </div>
    )
  }
}

