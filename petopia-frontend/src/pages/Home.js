import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import Story from '../components/Story';
import useStories from '../hooks/useStories'; // Importing useStories hook
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const { stories, loading } = useStories(); // Using the useStories hook

  useEffect(() => {
    const fetchStories = async () => {
      const snapshot = await firestore.collection('stories').get();
      const storiesList = snapshot.docs.map(doc => doc.data());
      setStories(storiesList);
    };

    fetchStories();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to Petopia</h1>
      <p>Share stories, photos, and videos of your pets!</p>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
      <Link to="/share" className="bg-blue-500 text-white px-4 py-2 mt-8 rounded">
        Share Your Story
      </Link>
    </div>
  );
};

export default Home;
