 import React, { useState } from 'react';

function TextAreaWithLimit() {
  const [text, setText] = useState('');
  const maxChar = 100;     //maxChar=variable set

  function handleChange(e) {
    const newText = e.target.value;
    if (newText.length <= maxChar) {
      setText(newText);
    }
  };

  const remainingChar = maxChar - text.length;

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      
      {remainingChar<= 10 && (
        <div style={{ color: 'red' }}>
          {`You have ${remainingChar} characters remaining`}
        </div>
      )}
    </div>
  );
}

export default TextAreaWithLimit