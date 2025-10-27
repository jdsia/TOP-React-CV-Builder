import { useState } from 'react'
import './App.css'
import  GeneralInfo from './components/GeneralInfo.jsx'
import  EducationalExperience from './components/EducationalExperience.jsx'


function App() {

  // [1] stores data for general information
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const [educationalExperience, setEducationalExperience] = useState({
    schoolName: '',
    titleStudy: '',
    dateStudy: '',
  })

  return (
    <>
      <h1>CV Builder</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
      <EducationalExperience educationalExperience={educationalExperience} setEducationalExperience={setEducationalExperience}/>
    </>
  )
}

export default App
