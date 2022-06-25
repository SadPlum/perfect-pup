import React, { useRef, useEffect } from "react";

function NumberSelect({ identifier, label, setState, setReference }) {
  const ref = useRef(null);
  useEffect(() => {
    setReference(ref);
  }, []);
  return (
    <div className="admin-input">
      <label htmlFor={identifier}>{label}: </label>
      <input
        type="number"
        id={identifier}
        name={identifier}
        min="0"
        max="25"
        onChange={(e) => setState(e.target.value)}
        required
        placeholder={identifier}
        ref={ref}
      />
    </div>
  );
}

export default NumberSelect;
