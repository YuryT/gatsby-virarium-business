import React, { Component } from 'react'
import favicon from './img/favicon.ico'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e)
  }
}

export default class HTML extends Component {
  render () {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      )
    }
    return (
      <html lang='ru' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          <meta name='google-site-verification' content='UD9iO6GR7Rfe8gMkLb4lcG6xAgnfz8KYakAXMy6neMY' />
          <meta name="yandex-verification" content="35693d297b83d1f7" />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
          {css}
          <script src="//code.jivosite.com/widget/UBV9V4WSc3" async></script>
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          {/*<script src={__PATH_PREFIX__ + '/js/toggle.js'} />*/}
        </body>
      </html>
    )
  }
}
