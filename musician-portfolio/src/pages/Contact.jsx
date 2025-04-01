import React, { useState } from 'react';
import '../styles/Contact.css';

// Social media links (update with your actual links)
const socialLinks = {
  facebook: "https://www.facebook.com/yourprofile",
  twitter: "https://twitter.com/yourprofile",
  instagram: "https://www.instagram.com/yourprofile",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  youtube: "https://www.youtube.com/c/yourchannel"
};

function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    email: '',
    topic: '',
    message: ''
  });

  // State for newsletter subscription
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle newsletter input change
  const handleNewsletterChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.topic) {
      alert('Please select a topic');
    } else {
      alert('Form submitted!');
      // Handle your form submission logic here (e.g., API call)
    }
  };

  // Handle newsletter subscription submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed to the newsletter!');
    // Handle subscription logic here (e.g., API call)
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for bookings!</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="topic">Topic:</label>
        <select
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="feedback">Bookings</option>
          <option value="support">Score Rental</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Type your message"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {/* Newsletter Subscription Form */}
      <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
        <label htmlFor="newsletter-email">Subscribe to our Newsletter:</label>
        <input
          type="email"
          id="newsletter-email"
          value={newsletterEmail}
          onChange={handleNewsletterChange}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>

      {/* Social Media Icons */}
      <div className="social-media">
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <img src="facebook-icon.png" alt="Facebook" />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <img src="twitter-icon.png" alt="Twitter" />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <img src="instagram-icon.png" alt="Instagram" />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          <img src="youtube-icon.png" alt="YouTube" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
