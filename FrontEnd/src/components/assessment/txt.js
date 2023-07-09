import React, { useState } from 'react';
import txt from './txt.css'
function Txt() {
  const [loremIpsum, setLoremIpsum] = useState('');

  const autoExpand = (event) => {
    // Add your logic for auto expanding the textarea here
  };

  return (
    <div className="App">
      <textarea
        id="TextArea"
        value={loremIpsum}
        onChange={(e) => setLoremIpsum(e.target.value)}
        onKeyUp={autoExpand}
        placeholder="Write your Answer here."
      ></textarea>
    </div>
  );
}

export default Txt;
