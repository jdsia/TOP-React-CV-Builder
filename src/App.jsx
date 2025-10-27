import { useState } from 'react'
import './App.css'
import  GeneralInfo from './components/GeneralInfo.jsx'


function App() {

  // [1] stores data for general information
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })

  return (
    <>
      <h1>CV Builder</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
    </>
  )
}

export default App
