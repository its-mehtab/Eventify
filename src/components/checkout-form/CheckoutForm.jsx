import React, { useState } from "react";
import CustomInput from "../../components/custom-input/CustomInput";

const CheckoutForm = () => {
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
    <div className="form-group">
      <h3>Billing Details</h3>
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
          <CustomInput
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street Address"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <CustomInput
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
        </div>
        <div className="col-md-6">
          <CustomInput
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <CustomInput
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
        </div>
        <div className="col-md-6">
          <CustomInput
            type="number"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
