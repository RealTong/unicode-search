import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import {renderToString} from "react-dom/server";

const passToClient = ['pageProps', 'documentProps']

function render(pageContext: any) {
  const { Page, pageProps } = pageContext
  const pageHtml = renderToString(<Page {...pageProps} />)

  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'RealTong'
  const description = (documentProps && documentProps.description) || 'cheat-sheet for Nerd font'

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="author" content="RealTong" />
        <meta property="og:title" content="Unicode Search" /> 
        <meta property="description" content="${description}" />
        <meta property="og:description" content="${description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
export { render }
export { passToClient }