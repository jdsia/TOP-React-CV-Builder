function PracticalExperience({practicalExperience, setPracticalExperience}) {

  function handleChange(e) {
    const {name, value} = e.target;

    // just trying to understand the code better
    setPracticalExperience({...PracticalExperience, [name]: value});
  }

  return (
    <div>
      <div>
        Company Name:
      </div>
      <input  name="companyName" value={practicalExperience.companyName} onChange={handleChange}/>
      <div>
        Title of Position:
      </div>
      <input  name="positionTitle" value={practicalExperience.positionTitle} onChange={handleChange}/>
      <div>
        Main Responsibilities:
      </div>
      <input  name="jobResponsibilities" value={practicalExperience.jobResponsibilities} onChange={handleChange}/>
      <div>
        Date When Worked:
      </div>
      <input  name="dateWhenWorked" value={practicalExperience.dateWhenWorked} onChange={handleChange}/>
    </div>
  )

}

export default PracticalExperience;

    // companyName: '',
    // positionTitle: '',
    // jobResponsibilities: '',
    // dateWhenWorked: '',

