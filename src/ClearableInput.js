import React, { useRef } from 'react';

function ClearableInput() {
  const inputRef = useRef(null);

  const handleClear = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Digite algo..." />
      <button onClick={handleClear}>Limpar</button>
    </div>
  );
}

export default ClearableInput;
