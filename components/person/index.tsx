import React, {useEffect} from 'react'
import {Random} from 'components/common/Random'
import {observer} from 'mobx-react'
import store from './store'
import personStore from './personStore'
const Input = observer((props: any) => {
  const {name}: {name: 'age' | 'firstName' | 'lastName'} = props
  return (
    <div>
      {name}:{store.data.person[name]} -
      <input
        value={store.data.person[name]}
        onChange={event => {
          const v = event.target.value
          store.setPerson(name, v)
        }}
      />
      <Random />
    </div>
  )
})
const Counter = observer(() => {
  return (
    <div>
      <Random />
      <span>Count: {store.data.count}</span>
      <button type="button" onClick={() => store.inc()}>
        +1
      </button>
    </div>
  )
})

const Person = (props: any) => {
  // useEffect(() => {
  //   store.hydrate(props.store)
  //   personStore.hydrate(props.personStore)
  // }, [])
  return (
    <div>
      <Counter />
      <Random />
      <Input name={'firstName'} />
      <Input name={'lastName'} />
      <Input name={'age'} />
      <p>{JSON.stringify(personStore, null, 2)}</p>
    </div>
  )
}
/* export const getStaticProps = async () => {
  await store.getData()
  await personStore.getData()
  console.log('store.data', store.data)
  return {props: {store: store.data, personStore: personStore.data}}
} */
Person.getInitialProps = async () => {
  await store.getData()
  await personStore.getData()
  return {store, personStore}
}
Person.hydrate = (props: any) => {
  store.hydrate(props.store)
  personStore.hydrate(props.personStore)
}

export default Person
