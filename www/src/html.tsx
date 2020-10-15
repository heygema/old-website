import React from "react";

export default props => (
  <html {...props.htmlAttributes}>
    <head>

      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* <script
        dangerouslySetInnerHTML={{ __html: `document.domain = "narative.co"` }}
      /> */}
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
      <script data-goatcounter="https://gema.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
    </body>
  </html>
);
