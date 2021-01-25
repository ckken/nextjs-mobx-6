import React from 'react'
import {observer} from 'mobx-react'
import timerStore from 'store/timer'
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
@observer
export default class TimerDecorator extends React.Component {
  render() {
    console.log('TimerDecorator')
    return (
      <>
        <Inc />
        <p style={{fontWeight: 'bolder', fontSize: '50px'}}>{timerStore.secondsPassed}</p>
      </>
    )
  }
}
