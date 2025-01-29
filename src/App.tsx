import { useState } from 'react'
import './App.css'
import DisplayTable from './components/DisplayTable'
import data from './ExampleData.json'

function App() {
  const [SearchText, setSearchText] = useState('');

  return (
    <>
      <label htmlFor="">Поиск по таблице</label>
      <input onChange={e => setSearchText(e.target.value)} type="text" placeholder='Что вы хотите найти'></input>
      <DisplayTable data={data} />
    </>
  )
}

export default App