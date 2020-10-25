import React from "react"
import Helmet from "react-helmet"

const MetaHead = () => {
  return (
    <Helmet>
      <head>
        {`<meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="note" content="environment=development" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"
        />
        <script src="/socket.io/socket.io.js"></script>`}
      </head>
    </Helmet>
  )
}
export default MetaHead
