import React from "react";

function ImageInput({ label, identifier, setState }) {
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
      />
    </div>
  );
}

export default ImageInput;
