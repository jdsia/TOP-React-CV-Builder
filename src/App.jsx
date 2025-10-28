import { useState } from 'react'
import './App.css'
import  GeneralInfo from './components/GeneralInfo.jsx'
import  EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx'
import RenderedCV from './components/RenderedCV.jsx'


function App() {
  
  // MAYBE have a isRendered state, only show the rendered CV once its toggled.
  const [isRendered, setisRendered] = useState(false);
  // if isEditing, show inputs. if !isEditing show inputs + renderedCV 

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

  // idk if having a submit thingy for each component is a best prac but idk
  // handles form submission for general info class
  // Function to submit ALL the data in the forms.
  // dont need to pass to props me thinks
  // if isEditing, show inputs. if !isEditing show inputs + renderedCV 
  function handleGeneralSubmit() {
    // prevents page reload
    //setisRendered(true);
    console.log(generalInfo)
  }

  // handleEducationSubmit
  // when clicked, i think render another educationalExperience component. to add more info


  // extract input components into CVinput component
  if (!isRendered) {
    return (
      <>
        <h1>CV Builder</h1>
        <GeneralInfo 
          generalInfo={generalInfo} 
          setGeneralInfo={setGeneralInfo} 
          handleGeneralSubmit={handleGeneralSubmit}
        />

        <EducationalExperience 
          educationalExperience={educationalExperience} 
          setEducationalExperience={setEducationalExperience} 
        />

        <PracticalExperience 
          practicalExperience={practicalExperience} 
          setPracticalExperience={setPracticalExperience} 
        />
        <button onClick={()=>setisRendered(true)}>Submit</button>
      </>
    )
  } else {
    return (
      <RenderedCV 
        generalInfo={generalInfo}
        educationalExperience={educationalExperience}
        practicalExperience={practicalExperience}
        onEdit={() => setisRendered(false)}
        />
    )
  }
}

export default App
