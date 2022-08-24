import React from "react";
import pawIcon from "../../../../icons/paw.png";

function Tips({ tip, index }) {
  return (
    <article data-testid="tips" className="tip">
      <div className="tip-mobile">
        {index === 0 && (
          <img
            src={pawIcon}
            alt="paw icon"
            className="paw-icon paw-icon-mobile"
          />
        )}
      </div>

      <div className="tip-main">
        <img src={pawIcon} alt="paw icon" className="paw-icon" />
        <p className="tip-text">{tip}</p>
        <img src={pawIcon} alt="paw icon" className="paw-icon paw-icon-md" />
      </div>
    </article>
  );
}

export default Tips;
