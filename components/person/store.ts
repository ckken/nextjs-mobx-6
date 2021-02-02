import {makeAutoObservable} from 'mobx'
import axios from 'axios'
class Store {
  data = {
    count: 0,
    person: {
      age: '0',
      firstName: '0',
      lastName: '0',
    },
  }

  constructor() {
    makeAutoObservable(this)
  }
  setPerson(k: 'age' | 'firstName' | 'lastName', v: string) {
    this.data.person[k] = v
  }
  inc() {
    this.data.count += 1
  }
  async getData() {
    const {data} = await axios.get('http://localhost:3000/data.json')
    // console.log('store data', data)
    this.data = data
  }
  hydrate(d: any) {
    this.data = d.data
  }
}

export default new Store()
