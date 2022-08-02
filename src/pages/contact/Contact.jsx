import React,{useState} from 'react'

import './contact.css'


const Contact = () => {
  const [contactFormData, setContactFormData] =useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
      <>
      <form
        className='formStyle'
        onSubmit={(e) => handleFormSubmit(e)}
        name="contactForm"
        autoComplete="off"
      >
        <p  className='formHeadingStyle' >Contact Form</p>
        <input
          required={true}
         className='inputFieldStyle'
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          placeholder="Enter your name."
        />
        <input
          required={true}
          className='inputFieldStyle'
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          placeholder="Enter your email."
        />
        <textarea
          rows={5}
          required={true}
          className='inputFieldStyle'
          onChange={(e) => handleChange(e)}
          name="message"
          placeholder="Enter your message."
        ></textarea>
        <button className='buttonStyle'>Submit</button>
      </form>

      {submitted && (
        <pre className='submittedStyle' >{JSON.stringify(contactFormData)}</pre>
      )}
    </>
  );
};

export default Contact
