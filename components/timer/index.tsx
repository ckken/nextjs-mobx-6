import {observer} from 'mobx-react'
import timerStore from 'store/timer'
import Nav from 'components/common/nav'
import TimerDecorator from './decorator'
function Timer() {
  return (
    <>
      <Nav />
      <p style={{fontWeight: 'bolder', fontSize: '50px'}}>{timerStore.secondsPassed}</p>
      <h2>TimerDecorator</h2>
      <TimerDecorator />
    </>
  )
}

export default observer(Timer)
