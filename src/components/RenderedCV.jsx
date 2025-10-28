function RenderedCV({ generalInfo, educationalExperience, practicalExperience, onEdit }) {
  return (
    <div className="cv-display">
      <h1>{generalInfo.name}'s CV</h1>

      <section>
        <h2>General Information</h2>
        <p><strong>Name:</strong> {generalInfo.name}</p>
        <p><strong>Email:</strong> {generalInfo.email}</p>
        <p><strong>Phone:</strong> {generalInfo.phone}</p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>School:</strong> {educationalExperience.schoolName}</p>
        <p><strong>Title of Study:</strong> {educationalExperience.titleStudy}</p>
        <p><strong>Date of Study:</strong> {educationalExperience.dateStudy}</p>
      </section>

      <section>
        <h2>Experience</h2>
        <p><strong>Company Name:</strong> {practicalExperience.companyName}</p>
        <p><strong>Position:</strong> {practicalExperience.positionTitle}</p>
        <p><strong>Main Responsibilities:</strong> {practicalExperience.jobResponsibilities}</p>
        <p><strong>Date Worked:</strong> {practicalExperience.dateWhenWorked}</p>
      </section>

      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default RenderedCV;
