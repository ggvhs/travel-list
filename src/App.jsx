import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import Stats from './components/Stats'
import PackingList from './components/PackingList'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {

  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems(
      [
        ...items,
        item 
      ]
    )
  }
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  )
}

export default App
