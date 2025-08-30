import React, { useRef } from 'react';
import FRInput from './FRInput';

function FRParentInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <FRInput ref={inputRef} />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
}

export default FRParentInput;
