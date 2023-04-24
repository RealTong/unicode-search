import {hydrate, render as reactRender} from "react-dom";


export { render }
let dispose: () => void
async function render(pageContext:any) {
  const content:any = document.getElementById('root')

  const { Page, pageProps } = pageContext

  if (dispose) {
    dispose()
  }

  if (pageContext.isHydration) {
    hydrate(
      <Page {...pageProps} />,
      content
    )
  }else {
    reactRender(
      <Page {...pageProps} />,
      content
    )
  }
}