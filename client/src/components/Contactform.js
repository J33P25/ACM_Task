import './contactformstyle.css';
import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/contact", formData)
      .then(res => {
        alert(res.data.message || "Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(err => {
        alert("Failed to send message.");
        console.error(err);
      });
  };

  return (
    <div className="contact-form">
      <h1>Send a message to us!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}

export default ContactForm;
