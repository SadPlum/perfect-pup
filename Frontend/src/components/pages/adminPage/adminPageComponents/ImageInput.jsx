import React, { useRef, useEffect } from "react";

function ImageInput({ label, identifier, setState, setReference }) {
  const ref = useRef(null);
  useEffect(() => {
    setReference(ref);
  }, []);
  return (
    <div className="admin-input image-input">
      <label htmlFor={identifier}>Select {label}: </label>
      <input
        type="file"
        id={identifier}
        name={identifier}
        accept="image/*"
        onChange={(e) => setState(e.target.files[0])}
        required
        ref={ref}
      />
    </div>
  );
}

export default ImageInput;
