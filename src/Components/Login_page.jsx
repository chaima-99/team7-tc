import React, { useState } from 'react';

const LoginPage = () => {
  // Initialiser l'état du formulaire
  const [formData, setFormData] = useState({
    usrname: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.usrname) {
      newErrors.email = 'User name is required!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'User name is invalid.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required!';
    } else if (formData.password.length <= 8) {
      newErrors.password = 'Password must be more than 8 characters!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);

    // Validation du formulaire avant soumission
    if (validateForm()) {
      setSubmitted(true);
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {submitted && <p className="success-message">Login Successful!</p>}
      <form onSubmit={handleSubmit}>
        <div className='  bg-red-500'>
          <label>Email:</label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '14px' }}>{errors.email}</p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '14px' }}>{errors.password}</p>
          )}
        </div>
        {/* Le bouton doit être à l'intérieur de <form>, et le <div> doit être fermé */}
        <button type="submit">Login</button>
      </form>
      <div className=' p-4'>
        HIIIII
      </div>
    </div>
  );
};

export default LoginPage;
