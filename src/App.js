import ChartContainer from './ChartContainer'
import { useState } from 'react'
import CaseSelector from './CaseSelector';
import Header from './Header'

function App() {

  const [chosenCase, chooseNewCase] = useState()

  return (
  <>
    <Header />
    <CaseSelector chosenCase={chosenCase} chooseNewCase={chooseNewCase}/>
    <ChartContainer chosenCase={chosenCase}/>
  </>
  )
}

export default App;
