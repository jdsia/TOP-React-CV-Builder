import { useState } from "react";

function GeneralInfo({generalInfo, setGeneralInfo, handleGeneralSubmit}) {

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const {name, value} = e.target;
    setGeneralInfo({...generalInfo , [name]: value});

  }

  // preview feature rather
  function handleSubmit(e) {
    e.preventDefault();
    handleGeneralSubmit();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Preview</button>
        </div>
      </form>
    )
  } else {
    return (
      <div>
        <h3>Preview</h3>
        <p><strong>Name:</strong> {generalInfo.name}</p>
        <p><strong>Email:</strong> {generalInfo.email}</p>
        <p><strong>Phone:</strong> {generalInfo.phone}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    )
  }

}

export default GeneralInfo
