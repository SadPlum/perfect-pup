import React from "react";

function TrueFalseSelect({ identifier, label, setState }) {
  return (
    <div className="select-bar admin-input">
      <label htmlFor={label}>{identifier}: </label>
      <select
        name={label}
        id={label}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="" disabled selected>
          select
        </option>
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
    </div>
  );
}

export default TrueFalseSelect;
