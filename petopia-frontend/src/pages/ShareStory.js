import React, { useState } from 'react';
import { firestore } from '../firebase';

const ShareStory = () => {
  const [formData, setFormData] = useState({
    name: '',
    story: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Save form data to Firestore
        await firestore.collection('stories').add(formData);
  
        // Optionally, redirect to home or show success message
        console.log('Story submitted successfully!');
        // Add your logic for redirection or success message here
      } catch (error) {
        console.error('Error submitting story:', error);
      }
    };

    return (
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-8">Share Your Pet's Story</h1>
          <form onSubmit={handleSubmit} className="max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Story</label>
              <textarea
                name="story"
                value={formData.story}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 w-full h-32"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="mt-1 p-2 border border-gray-300 w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      );
    };
    
    export default ShareStory;