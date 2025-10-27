function EducationalExperience({educationalExperience, setEducationalExperience}) {

  function handleChange(e) {
    const {name, value} = e.target;

    // just trying to understand the code better
    setEducationalExperience({...educationalExperience , [name]: value});
  }

  return (
    <div>
      <div>
        name of school:
      </div>
      <input  name="schoolName" value={educationalExperience.schoolName} onChange={handleChange}/>
      <div>
        title of study:
      </div>
      <input  name="titleStudy" value={educationalExperience.titleStudy} onChange={handleChange}/>
      <div>
        date of study:
      </div>
      <input  name="dateStudy" value={educationalExperience.dateStudy} onChange={handleChange}/>
    </div>
  )

}

export default EducationalExperience;
