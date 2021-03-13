import {makeAutoObservable, makeObservable, observable, action, configure} from 'mobx'
configure({
  useProxies: 'never',
})
class TimerStore {
  @observable secondsPassed = 0
  @observable anotherNum = 0
  constructor() {
    makeObservable(this)
  }
  @action
  increase() {
    this.secondsPassed += 1
  }

  @action
  reset() {
    this.anotherNum += 1
    this.secondsPassed = 0
  }
}

export default new TimerStore()
