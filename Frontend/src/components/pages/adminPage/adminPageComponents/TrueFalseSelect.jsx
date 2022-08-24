import React, { useEffect, useRef } from "react";

function TrueFalseSelect({ identifier, label, setState, setReference }) {
  const ref = useRef(null);
  useEffect(() => {
    setReference(ref);
  }, []);
  return (
    <div className="select-bar admin-input">
      <label htmlFor={label}>{identifier}: </label>
      <select
        name={label}
        id={label}
        onChange={(e) => setState(e.target.value)}
        ref={ref}
        defaultValue=""
      >
        <option value="" disabled={true} selected>
          select
        </option>
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
    </div>
  );
}

export default TrueFalseSelect;
