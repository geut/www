import React, { Component } from 'react'
import Head from 'next/head'

import { name, description, url } from '../site'

export default class Meta extends Component {
  render() {
    const { title = name } = this.props
    return (
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${url}/static/images/logo.png`} />
      </Head>
    )
  }
}
