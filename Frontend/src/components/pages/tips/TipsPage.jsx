import React from "react";
import Tips from "./tipsComponents/Tips";
import dogTips from "../../../icons/dog-tips.jpg";

function TipsPage() {
  const tipsArr = [
    "Prepare for their arrival.",
    "Stay calm on the way home.",
    "Take a walk with them.",
    "Give them the grand tour.",
    "Make sure there's time to explore.",
    "Keep it intimate.",
    "Remember to give them down-time.",
  ];
  return (
    <section className="tips-page">
      <div className="tips-banner">
        <img src={dogTips} alt="Small brown dog" className="tips-image" />
      </div>

      <div className="tips-page-header">
        <h4 className="tips-page-title">
          Is this your first time adopting a dog?
        </h4>
        <p className="tips-page-description">
          Many of our dogs are rescues, or come from unfortunate situations.
          This can be a scary and uncomfortable situation for you and your new
          pet. Here are some tips to help get you, and your new best friend
          settled.
        </p>
      </div>
      <div className="tips-section">
        {tipsArr.map((tip, i) => {
          return <Tips tip={tip} index={i} key={i} />;
        })}
      </div>
      <p className="tips-credits">
        Tips taken from{" "}
        <a
          href="https://www.samcoralphoto.com/10-tips-welcome-rescue-dog-home/"
          className="tips-credits-link"
        >
          Sam Coral Photography
        </a>
      </p>
    </section>
  );
}

export default TipsPage;
