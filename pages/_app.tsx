import './styles.scss'
//mobx
import {configure} from 'mobx'
import {enableStaticRendering} from 'mobx-react'
configure({useProxies: 'never'})
enableStaticRendering(typeof window === 'undefined')
//
export default function App({Component, pageProps}: any) {
  if (typeof window !== 'undefined' && Component.hydrate) Component.hydrate(pageProps)
  return <Component {...pageProps} />
}
