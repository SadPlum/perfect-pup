import React from "react";

function SliderButton({ side, onClick, icon }) {
  return (
    <button
      data-testid={`${side}-slider-button`}
      className={`button-${side}`}
      onClick={onClick}
    >
      <div className="slider-button">{icon}</div>
    </button>
  );
}

export default SliderButton;
