import {makeAutoObservable} from 'mobx'
import axios from 'axios'
class PersonStore {
  data = {
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
  async getData() {
    const {data} = await axios.get('http://localhost:3000/data.json')
    this.data = data
  }
  hydrate(d: any) {
    this.data = d.data
  }
}

export default new PersonStore()
