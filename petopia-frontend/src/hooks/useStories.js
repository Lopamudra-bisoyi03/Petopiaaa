import { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const useStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      const snapshot = await firestore.collection('stories').get();
      const storiesList = snapshot.docs.map(doc => doc.data());
      setStories(storiesList);
      setLoading(false);
    };

    fetchStories();
  }, []);

  return { stories, loading };
};

export default useStories;
