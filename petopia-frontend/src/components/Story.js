import React from 'react';

const Story = ({ story }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold">{story.name}</h2>
      <p>{story.story}</p>
      {story.photo && <img src={story.photo} alt={story.name} className="mt-4" />}
    </div>
  );
};

export default Story;
