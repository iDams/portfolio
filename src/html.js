import { Component } from 'react'

import favicon from './assets/logo.png'

export default class HTML extends Component {
  render() {
    return (

      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Portfolio of Damien Soulard"
          />
          <meta
            name="keywords"
            content="portolio, damien, soulard, frontend, development, react, js"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          <title>Damien Soulard</title>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
