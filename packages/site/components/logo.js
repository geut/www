import React, { Component } from 'react'

export default class Logo extends Component {
  static defaultProps = {
    animate: false
  }

  // draw = async (element) => {
  //   element.setAttribute('stroke-dasharray', element.getTotalLength())
  //   element.setAttribute('stroke-dashoffset', element.getTotalLength())

  //   if ( !element.dataset ) {
  //       // weird FF,old browsers fix
  //       element.dataset = {};
  //       element.dataset.start = element.attributes.getNamedItem( 'data-start' ).value
  //       element.dataset.duration = element.attributes.getNamedItem( 'data-duration' ).value
  //   }

  //   const delay = parseInt(element.dataset.start)
  //   const duration = parseInt(element.dataset.duration)
  
  //   return velocity(element, {
  //       strokeDashoffset: 0
  //   }, {
  //       easing: 'easeInOutQuad',
  //       delay,
  //       duration
  //   })
  // }

  // fill = async (element) => {
  //   const fill = element.getAttribute('fill')
  //   const stroke = element.getAttribute('stroke')
  //   return velocity(element, {
  //       fillOpacity: 1,
  //       fill,
  //       stroke
  //   })
  // }

  // async componentDidMount() {
  //   const { animate } = this.props
  //   if (animate && typeof window !== undefined) {
  //     velocity = require('velocity-animate')
      
  //     this.logoEl.style.opacity = 1;

  //     const paths = Array.from(this.logoEl.getElementsByTagName('path'))
  //     await Promise.all(paths.map(this.draw))
  //     await Promise.all(paths.map(this.fill))
  //   }
  // }

  render() {
    const { animate,  ...props } = this.props
    return (
      <svg ref={el => this.logoEl = el} {...props} type="image/svg+xml" x="0px" y="0px" viewBox="0 0 220 160" xmlSpace="preserve">
        <g>
          <g className="circle">
            <path d="M130.886,62.535h-17.188c0,0.11,0.018,0.225,0.018,0.344c0,10.748-7.907,19.462-17.656,19.462    c-8.234,0-15.129-6.224-17.086-14.629h-9.757c-0.137,18.133,13.892,29.25,30.293,29.25c17.369,0,31.458-14.431,31.458-32.237    C130.968,63.988,130.933,63.26,130.886,62.535z"
              fill="#57B66B"
              fillOpacity={animate ? 0 : 1}
              stroke="#57B66B"
              data-start="0"
              data-duration="1000"
              className="main">
            </path>
          </g>
          <g className="circle">
            <path d="M147.814,56.32C141.09,12.805,101.197,3.998,76.85,5.552c-0.29,0.018-0.543,0.053-0.822,0.075    l7.437,32.229c0.36-0.08,0.736-0.146,1.16-0.19c25.9-2.584,39.367,14.767,39.367,28.496c0,13.354-8.455,24.247-19.057,24.834    l4.485,16.618c0.108,0,0.214,0,0.323-0.01C127.096,106.562,152.155,84.303,147.814,56.32z"
              fill="#55B794"
              fillOpacity={animate ? 0 : 1}
              stroke="#55B794"
              data-start="200"
              data-duration="1500"
              className="main">
            </path>
            <path d="M130.886,62.535l-7.037,0.167c2.178,15.453-8.197,27.328-18.748,28.46l1.301,4.742    C123.926,92.45,131.985,74.863,130.886,62.535z"
              fill="#2A6C3E"
              fillOpacity={animate ? 0 : 1}
              stroke="#2A6C3E"
              data-start="200"
              data-duration="700"
              className="multiply">
            </path>
          </g>
          <g className="circle">
            <path d="M137.658,53.422c1.228,3.856,1.901,7.969,1.901,12.258c0,21.574-16.828,39.075-37.59,39.075      c-19.836,0-30.851-9.524-35.264-23.178L44.011,85.77c7.519,28.562,28.692,49.283,64.815,48.771      c38.263-0.548,80.955-45.074,69.294-90.338L137.658,53.422z"
              fill="#4C91BC"
              fillOpacity={animate ? 0 : 1}
              stroke="#4C91BC"
              data-start="1000"
              data-duration="2000"
              className="main">
            </path>
            <path d="M139.559,65.68c0,19.262-13.419,35.267-31.072,38.478l0.933,3.456c0.108,0,0.214-0.007,0.323-0.01    c10.41-0.324,25.089-9.954,32.91-23.324c2.503-4.28,8.25-17.875,4.191-32.95l-9.186,2.093    C138.886,57.278,139.559,61.391,139.559,65.68z"
              fill="#1C3E72"
              fillOpacity={animate ? 0 : 1}
              stroke="#1C3E72"
              data-start="1000"
              data-duration="1000"
              className="multiply">
            </path>
          </g>
          <g className="circle">
            <path d="M99.141,122.627c-22.481-2.624-41.748-20.841-41.462-40.445c0.311-21.203,10.694-38.54,35.338-39.331    c6.353-0.208,13.261,2.428,17.358,5.389l14.135-16.269c0,0-17.399-16.542-44.024-11.842c-5.738,1.02-22.688,5.967-36.003,21.282    c-12.965,14.904-26.431,56.342,10.242,92.14C65.935,144.489,81.958,151.004,99.082,153c32.332,3.777,75.68-13.795,92.769-59.898    l-36.781-10.906c0.041,0.37,0.059,0.742-0.085,1.07C141.236,114.696,118.319,124.875,99.141,122.627z"
              fill="#535C9C"
              fillOpacity={animate ? 0 : 1}
              stroke="#535C9C"
              data-start="1500"
              data-duration="2000"
              className="main">
            </path>
            <path d="M79.422,20.464l4.042,17.517c0.36-0.08,0.736-0.146,1.16-0.19c12.387-1.236,21.922,2.094,28.509,7.4    l11.376-13.094c0,0-17.399-16.542-44.024-11.842C80.166,20.311,79.808,20.382,79.422,20.464z"
              fill="#262C5F"
              fillOpacity={animate ? 0 : 1}
              stroke="#262C5F"
              data-start="1500"
              data-duration="1000"
              className="multiply">
            </path>
            <path d="M155.069,82.196c-0.448,1.249-0.133,0.668-0.338,1.157c-27.663,66.01-95.329,37.51-96.996-0.157    l-13.19,2.468c7.522,28.567,28.697,49.288,64.824,48.771c25.468-0.358,52.31-19.983,64.366-46.572L155.069,82.196z"
              fill="#262C5F"
              fillOpacity={animate ? 0 : 1}
              stroke="#262C5F"
              data-start="1500"
              data-duration="1000"
              className="multiply">
            </path>
          </g>
        </g>
        <image href="" src="./static/images/logo.png" alt="GEUT logo" className="logo-fallback"></image>
      </svg>
    )
  }
}
