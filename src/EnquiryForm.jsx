// src/EnquiryForm.js
import React, { useState } from "react";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Free Counseling Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course of Interest</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value="BCOM">BCOM</option>
            <option value="BBA">BBA</option>
            <option value="BCA">BCA</option>
            <option value="BA">BA</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="MCOM">MCOM</option>
            <option value="MAJMC">MAJMC</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Additional Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Anything else you'd like us to know?"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
