import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resumeLink: '',
    appliedInternship: ''
  });

  const [internships, setInternships] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend-url.onrender.com/internships')
      .then(response => setInternships(response.data))
      .catch(error => console.error('There was an error!', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://your-backend-url.onrender.com/apply', formData)
      .then(response => alert('Application submitted successfully'))
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Resume Link:</label>
        <input type="text" name="resumeLink" value={formData.resumeLink} onChange={handleChange} required />
      </div>
      <div>
        <label>Internship:</label>
        <select name="appliedInternship" value={formData.appliedInternship} onChange={handleChange} required>
          <option value="">Select Internship</option>
          {internships.map((internship) => (
            <option key={internship._id} value={internship._id}>{internship.title}</option>
          ))}
        </select>
      </div>
      <button type="submit">Apply</button>
    </form>
  );
};

export default ApplyForm;
