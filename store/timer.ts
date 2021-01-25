import {makeAutoObservable, configure} from 'mobx'
configure({
  useProxies: 'never',
})
class TimerStore {
  secondsPassed = 0
  anotherNum = 0
  constructor() {
    makeAutoObservable(this)
  }

  increase() {
    this.secondsPassed += 1
  }

  reset() {
    this.anotherNum += 1
    this.secondsPassed = 0
  }
}

export default new TimerStore()
