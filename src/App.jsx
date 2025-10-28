import { useState } from 'react'
import './App.css'
import  GeneralInfo from './components/GeneralInfo.jsx'
import  EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx'


function App() {

  // [1] stores state for general information
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })

  // state for educational Experience
  const [educationalExperience, setEducationalExperience] = useState({
    schoolName: '',
    titleStudy: '',
    dateStudy: '',
  })

  const [practicalExperience, setPracticalExperience] = useState({
    companyName: '',
    positionTitle: '',
    jobResponsibilities: '',
    dateWhenWorked: '',
  })

  return (
    <>
      <h1>CV Builder</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
      <EducationalExperience educationalExperience={educationalExperience} setEducationalExperience={setEducationalExperience}/>
      <PracticalExperience practicalExperience={practicalExperience} setPracticalExperience={setPracticalExperience} />
    </>
  )
}

export default App
