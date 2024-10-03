import React, { useState } from "react";
import style from "./contact.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatQuoteFill } from "react-icons/bs";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialLink: "",
    message: "",
    topic: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(formData);
  };

  return (
    <div className={style.contactcontainer}>
      <div className={style.contactdetails}>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Get in touch with us!</p>
        <div className={style.info}>
            <div className={style.contactinfo}>
          <p>
            <i className="fas fa-map-marker-alt">
              <FaLocationDot />
            </i>{" "}
            Address
          </p>
          <span>Raipur, Chhattisgarh, India</span>
        </div>
        <div className={style.contactinfo}>
          <p>
            <i className="fas fa-envelope">
              <MdEmail />
            </i>{" "}
            Email
          </p>
          <span>contact@brainlessai.com</span>
        </div>
        <div className={style.contactinfo}>
          <p>
            <i className="fas fa-phone">
              <FaPhoneAlt />
            </i>{" "}
            Phone
          </p>
          <span>Available Soon</span>
        </div>

        </div>
        
        <div className={style.contactquote}>
          <p>
            <i className="fas fa-quote-left">
              <BsChatQuoteFill />
            </i>{" "}
            Quote
          </p>
          <span> " Connecting the world, one conversation at a time. "</span>

        </div>
      </div>

      <div className={style.getintouch}>
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.formgroup}>
            <label>Topic</label>
            <select name="topic" value={formData.topic} onChange={handleChange}>
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          <div className={style.formgroup}>
            <label>Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>
          <div className={style.formgroup}>
            <label>Your Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john.doe@example.com"
            />
          </div>
          <div className={style.formgroup}>
            <label>Social Link (Optional)</label>
            <input
              type="url"
              name="socialLink"
              value={formData.socialLink}
              onChange={handleChange}
              placeholder="Link"
            />
          </div>
          <div className={style.formgroup}>
            <label>Your Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button type="submit" className={style.sendmessagebtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
