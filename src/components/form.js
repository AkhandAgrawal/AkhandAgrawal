import "./formStyles.css"
import React, { useState } from 'react'

const Form = () => {
  const [subject, setSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <div className="form">
        <form action={`mailto:akhandaggi@gmail.com?subject=${encodeURIComponent(subject)}`} method="post" encType="text/plain">
            <label>Your Name</label>
            <input type="text" name="name"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Subject</label>
            <input type="text" name="subject" value={subject} onChange={handleSubjectChange}></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message" />
            <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
