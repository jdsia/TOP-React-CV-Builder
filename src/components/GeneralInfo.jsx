
function GeneralInfo({generalInfo, setGeneralInfo}) {

  function handleChange(e) {
    const {name, value} = e.target;

    setGeneralInfo({...generalInfo , [name]: value});
  }

  return (
    <div>
      <div>
        name:
      </div>
      <input  name="name" value={generalInfo.name} onChange={handleChange}/>
      <div>
        email:
      </div>
      <input  name="email" value={generalInfo.email} onChange={handleChange}/>
      <div>
        number:
      </div>
      <input  name="phone" value={generalInfo.phone} onChange={handleChange}/>
    </div>
  )

}

export default GeneralInfo
