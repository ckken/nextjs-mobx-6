import {observer} from 'mobx-react'
// import {useEffect} from 'react'
import timerStore from 'store/timer'
import Nav from 'components/common/nav'
const Num = observer(() => {
  return (
    <>
      <p style={{fontWeight: 'bolder', fontSize: '50px'}}>{timerStore.secondsPassed}</p>
      <p>{Math.random()}</p>
    </>
  )
})
const Inc = observer(() => {
  console.log('inc button')
  return (
    <>
      <button onClick={() => timerStore.increase()}>inc</button>
      <button onClick={() => timerStore.reset()}>reset</button>
      <p>{Math.random()}</p>
      <p>{timerStore.anotherNum}</p>
    </>
  )
})
function Home() {
  return (
    <>
      <Nav />
      <Inc />
      <Num />
    </>
  )
}

export default observer(Home)
