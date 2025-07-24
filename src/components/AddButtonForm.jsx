import React, { useState } from 'react';

const AddButtonForm = () => {
  const [buttonText, setButtonText] = useState('');
  const [buttons, setButtons] = useState([]);

  const handleAdd = () => {
    if (buttonText.trim()) {
      setButtons([...buttons, buttonText]);
      setButtonText('');
    }
  };

  return (
    <div className="add-button-form">
      <input
        type="text"
        placeholder="Enter CTA button text"
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
      />
      <button onClick={handleAdd}>+ Add Button</button>
      <div>
        {buttons.map((text, idx) => (
          <button key={idx}>{text}</button>
        ))}
      </div>
    </div>
  );
};

export default AddButtonForm;