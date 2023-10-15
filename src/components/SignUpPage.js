import React, { useState } from 'react';
import './style/SignUp.css'; 

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    donorType: 'Individual',
    firstName: '',
    lastName: '',
    organizationName: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
    contactNumber: '',
    pickupLocation: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.donorType) {
      newErrors.donorType = 'Donor Type is required';
    }

    if (formData.donorType === 'Individual') {
      if (!formData.firstName) {
        newErrors.firstName = 'First Name is required';
      }

      if (!formData.lastName) {
        newErrors.lastName = 'Last Name is required';
      }
    } else if (formData.donorType === 'Organization') {
      if (!formData.organizationName) {
        newErrors.organizationName = 'Organization Name is required';
      }
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New Password is required';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact Number is required';
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact Number is not valid';
    }

    if (!formData.pickupLocation) {
      newErrors.pickupLocation = 'Pickup Location is required';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data to your server or state management system
      setErrors({});
      // Implement form submission logic here
    } else {
      // Form is invalid, display validation errors
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-container">
      <h1>Sign Up for Cater2Care</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="donorType">Donor Type</label>
          <select
            id="donorType"
            name="donorType"
            value={formData.donorType}
            onChange={handleInputChange}
          >
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select>
          {errors.donorType && <p className="error">{errors.donorType}</p>}
        </div>
        {formData.donorType === 'Organization' ? (
          <div className="form-group">
            <label htmlFor="organizationName">Organization Name</label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleInputChange}
              required
            />
            {errors.organizationName && (
              <p className="error">{errors.organizationName}</p>
            )}
          </div>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </>
        )}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            required
          />
          {errors.newPassword && <p className="error">{errors.newPassword}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
          {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="pickupLocation">Pickup Location Address</label>
          <textarea
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            required
          />
          {errors.pickupLocation && <p className="error">{errors.pickupLocation}</p>}
        </div>
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
