import { useState } from "react";

function GeneralInfo({generalInfo, setGeneralInfo}) {


  function handleChange(e) {
    const {name, value} = e.target;
    setGeneralInfo({...generalInfo , [name]: value});

  }
    return (
      <form >
        <div>
          name:
        </div>
        <input  name="name" value={generalInfo.name} onChange={handleChange}/>
        <div>
          email:
        </div>
        <input  name="email" type ="email" value={generalInfo.email} onChange={handleChange}/>
        <div>
          number:
        </div>
        <input  name="phone" type="tel" value={generalInfo.phone} onChange={handleChange}/>
        <div>
        </div>
      </form>
    )
  }

export default GeneralInfo
