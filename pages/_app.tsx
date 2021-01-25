import './styles.scss'
//
import {configure} from 'mobx'
import {enableStaticRendering} from 'mobx-react'
configure({useProxies: 'never'})
enableStaticRendering(typeof window === 'undefined')
//
export default function App({Component, pageProps}: any) {
  return <Component {...pageProps} />
}
