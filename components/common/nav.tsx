import Link from 'next/link'
import {useEffect, useState} from 'react'
import css from './nav.module.scss'
const Nav = () => {
  const [random, setRandom]: any = useState()
  useEffect(() => {
    setRandom(Math.random())
  }, [])
  return (
    <div className={css.nav}>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/timer">
        <a>timer</a>
      </Link>
      <p>{random}</p>
    </div>
  )
}
export default Nav
