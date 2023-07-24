import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import Stats from './components/Stats'
import PackingList from './components/PackingList'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {


  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  )
}

export default App
