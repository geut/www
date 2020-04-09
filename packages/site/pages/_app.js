import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import withGA from 'next-ga'

import Meta from '../components/meta'
import { UA } from '../site'

import 'prismjs/themes/prism.css';

class SiteApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Meta />
        <style jsx global>{`
            :root {
              --spacing: 8px;

              --font-base: 16px;
              --font-family-geut: "ETH Sans";
              --font-family-heading: "Lato";
              --font-family-body: "Montserrat";

              --grey50: #fafafa;
              --grey100: #f0f0f0;
              --grey200: #e4e4e4;
              --grey300: #d5d5d5;
              --grey400: #bdbdbd;
              --grey500: #9e9e9e;
              --grey600: #757575;
              --grey700: #424242;
              --grey800: #212121;
              --grey900: #181818;
  
              --violet: #4F5186;
              --violetDark: rgba(43, 43, 83, 1);
              --grey: #f6f6f6;
              --green: #5ABA97;
              --blue: #4C91BC;
              
              --red: #d23c43;
              --white: #fafafa;

              --main-color: var(--grey800);
              --action-color: var(--blue);
              --heading-color: var(--violet);
            }

            @font-face {
              font-family: "ETH Sans";
              src: url("/static/fonts/eth-sans/EthRomainEthon.ttf");
              font-weight: lighter;
            }
          
            @font-face {
              font-family: "ETH Sans";
              src: url("/static/fonts/eth-sans/EthBlackEthon.ttf");
              font-weight: bold;
            }
          
            body {
              font-family: var(--font-family-body), -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
              font-size: var(--font-base);
              margin: 0 auto;
              padding: 0;
              box-sizing: border-box;
            }
            
            h1, h2, h3, h4, h5, h6 {
              font-family: var(--font-family-heading);
              font-weight: 300;
            }

            a {
              text-decoration: none;
            }

          `}</style>
        <Component {...pageProps} />
      </>
    )
  }
}

export default withGA(UA, Router)(SiteApp)
