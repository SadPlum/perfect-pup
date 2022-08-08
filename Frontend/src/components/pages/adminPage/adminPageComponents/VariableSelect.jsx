import React, { useEffect, useRef } from "react";

function VariableSelect({
  label,
  identifier,
  variables,
  setState,
  setReference,
}) {
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
        <option value="" disabled={true}>
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
