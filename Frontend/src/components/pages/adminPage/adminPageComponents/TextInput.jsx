import React, { useEffect, useRef } from "react";

function TextInput({
  identifier,
  label,
  setState,
  descriptionBox,
  setReference,
}) {
  const ref = useRef(null);
  useEffect(() => {
    setReference(ref);
  }, []);
  return (
    <div className="admin-input">
      {descriptionBox ? (
        <div>
          <label className="description-title" htmlFor={identifier}>
            {label}:
          </label>
          <textarea
            id={identifier}
            name={identifier}
            rows="10"
            cols="50"
            onChange={(e) => setState(e.target.value)}
            required
            ref={ref}
          ></textarea>
        </div>
      ) : (
        <div>
          <label htmlFor={identifier}>{label}: </label>
          <input
            type="text"
            id={identifier}
            name={identifier}
            onChange={(e) => setState(e.target.value.trim())}
            required
            ref={ref}
          />
        </div>
      )}
    </div>
  );
}

export default TextInput;
