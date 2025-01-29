import './App.css'
import DisplayTable from './components/DisplayTable'
import data from './ExampleData.json'

function App() {

  return (
    <>
      <DisplayTable data={data} />
    </>
  )
}

export default App