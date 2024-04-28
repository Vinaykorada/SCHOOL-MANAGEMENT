import React, { useState } from 'react';
import axios from 'axios';

const ParentsCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/dashboard/parents', { name, email });
      console.log(response.data);
      setError('');
    } catch (err) {
      console.error('Error creating parent:', err);
      setError('Error creating parent');
    }
  };

  return (
    <div>
      <h2>Create Parent</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ParentsCard;
