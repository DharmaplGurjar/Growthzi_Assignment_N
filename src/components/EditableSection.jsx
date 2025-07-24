import React, { useState } from 'react';

const EditableSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState('Editable Heading');
  const [description, setDescription] = useState('Click to edit this text.');

  const handleSave = async () => {
    setIsEditing(false);

    try {
      const response = await fetch('http://127.0.0.1:5000/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          heading: heading,
          description: description,
        }),
      });

      const data = await response.json();
      console.log('✅ Response from backend:', data);
    } catch (error) {
      console.error('Error while saving to backend:', error);
    }
  };

  return (
    <div className="editable-section">
      {isEditing ? (
        <>
          <input value={heading} onChange={(e) => setHeading(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2 onClick={() => setIsEditing(true)}>{heading}</h2>
          <p onClick={() => setIsEditing(true)}>{description}</p>
        </>
      )}
    </div>
  );
};

export default EditableSection;
