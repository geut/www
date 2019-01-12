import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <style jsx global>{`
            :root {
              --primary-color: #212121;
              --violet: #4F5186;
              --violetDark: rgba(43, 43, 83, 1);
              --grey: #f6f6f6;
              --green: #5ABA97;
              --blue: #4C91BC;
              --red: #d23c43;              
            }

            @font-face {
              font-family: "ETH Sans";
              src: url("./static/fonts/eth-sans/EthRomainEthon.ttf");
              font-weight: lighter;
            }
          
            @font-face {
              font-family: "ETH Sans";
              src: url("./static/fonts/eth-sans/EthBlackEthon.ttf");
              font-weight: bold;
            }
          
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
              margin: 0 auto;
              padding: 0;
            }
            
            h1, h2, h3, h4, h5, h6 {
                font-weight: 100;
            }
            
            p, .text {
              line-height: 1.55;
              margin-top: 5px;
              font-size: 0.8em;
            }
                      
            blockquote p {
                border-left: 5px solid #e0e0e0;
            }
            
            /* -- NAV -- */
            
            body>nav[role=navigation] {
                display: none;
            }
            
            nav[role=navigation] ul {
                margin: 0;
                padding: 0;
            }
            
            nav[role=navigation] ul li {
                list-style: none;
                display: inline-block;
            }
            
            /* -- links -- */
            
            a:link,
            a:visited { color: #265C83; }
            a:hover   { color: #7FDBFF; }
            a:active  {
              transition: color .3s;
              color: #007BE6;
            }
            a {
              transition: color .4s;
              color: #265C83;
              cursor: pointer;
              text-decoration: none;
            }
            .strong {
              font-weight: 400;
            }
            
            .text-left {
              text-align: left;
            }
            
            .text-center {
              text-align: center;
            }
            
            .text-right {
              text-align: right;
            }
            
            img.img-responsive {
                max-width: 100%;
                height: auto;
                display: block;
            }            
          `}</style>
        <Component {...pageProps} />
      </Container>
    )
  }
}
