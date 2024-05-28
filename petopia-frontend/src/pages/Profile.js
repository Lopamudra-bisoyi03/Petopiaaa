import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    displayName: user.displayName || '',
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await user.updateProfile({
        displayName: formData.displayName,
      });
      await user.updateEmail(formData.email);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Display Name</label>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
