import React from "react";

function VariableSelect({ label, identifier, variables, setState }) {
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
        {variables.map((variable) => (
          <option key={variable} value={variable}>
            {variable}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VariableSelect;
