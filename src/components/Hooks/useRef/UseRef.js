import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef('');

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function handleClick() {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>

      <button onClick={handleClick}> Focus on Input</button>
      <button onClick={()=>{alert(inputRef.current.value)}}>Alert Name</button>
      <h2>{renderCount.current}</h2>
    </div>
  );
}

export default UseRef;
