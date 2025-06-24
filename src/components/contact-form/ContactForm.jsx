import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    heading: "",
    date: "",
    artist: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Post to API here
  };

  return (
    <form className="form-wrap" action="">
      <h3>GET IN TOUCH NOW</h3>
      <div className="row">
        <div className="col-md-6">
          <CustomInput
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </div>
        <div className="col-md-6">
          <CustomInput
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <CustomInput
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <CustomInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <textarea
            name=""
            id=""
            rows="4"
            placeholder="Your message*"
          ></textarea>
        </div>
      </div>
      <button className="primary-btn btn-dark w-100 mt-2" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
