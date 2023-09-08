import React, { useState } from "react";
import "./ContactForm.module.scss";



function MyContactForm() {
  // Set initial state for name, email, message, and form errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  // Handle name input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  // Handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  // Handle message input changes
  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  // Validate email format using regex
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate input fields and set errors if necessary
    if (name.length <= 5) {
      setNameError(true);
      valid = false;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      valid = false;
    }
    if (message.length < 150) {
      setMessageError(true);
      valid = false;
    }

    // If all fields are valid, log form data and reset inputs
    if (valid) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName("");
      setEmail("");
      setMessage("");
      setMessageSent(true);
    }
  };

  // Render the contact form
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-header">Contact Me</h2>
        {messageSent && (
          <div className="contact-alert contact-success" role="alert">
            Your message has been sent successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="contact-label">
              Name:
            </label>
            <input
              type="text"
              className={`contact-input ${nameError ? "is-invalid" : ""}`}
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
            {nameError && (
              <div className="contact-error">Name must be more than 5 characters</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="contact-label">
              Email:
            </label>
            <input
              type="email"
              className={`contact-input ${emailError ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (
              <div className="contact-error">A valid email is required</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message" className="contact-label">
              Message:
            </label>
            <textarea
              className={`contact-input ${messageError ? "is-invalid" : ""}`}
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={handleMsgChange}
            />
            {messageError && (
              <div className="contact-error">Message must be at least 150 characters</div>
            )}
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default MyContactForm;

