import React, { useState } from 'react'


const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
        if (!!errors[name]) {
          setErrors(prevErrors => ({
            ...prevErrors,
            [name]: null
          }));
        }
      };
    
      const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password && formData.password.length < 3 ) {
          newErrors.password = 'Password must be at least 3 characters long';
        }
        return newErrors;
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        let formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors);
        } else {
          console.log('Form Data Submitted:', formData)

          // hey manya this is the start of the jwt token verfcation and the connection to the backend part

          try { 
            const response = await fetch('http://localhost:3000/signin',{
                method:'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            
          } catch (error) {
            console.error('Error:', error);
            alert('Signup failed!');
            
          }

          setFormData({
            name: '',
            username: '',
            password: ''
          });

         
          alert('Signup successful!');
        }
      };
    
      return (
        <div>
          <h1>Sign Up To Your Account</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    };

export default Signup