import React from "react";

function Filter({ value, title, handleChange, valueOptionArray, last }) {
  return (
    <div className={last ? "searchOption searchOption-last" : "searchOption "}>
      <label className="label">{title}:</label>
      <select
        className="select"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {valueOptionArray.map(([value, option], i) => (
          <option className="option" value={value} key={i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
