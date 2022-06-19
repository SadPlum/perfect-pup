import React from "react";

function NumberSelect({ identifier, label, setState }) {
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
      />
    </div>
  );
}

export default NumberSelect;
