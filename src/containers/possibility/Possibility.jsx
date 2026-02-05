import React from 'react'
import './Possibility.css';
import possibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          GPT-3 unlocks new ways to interact with technology by enabling
          machines to understand and generate human language. From automating
          workflows to powering intelligent
          applications, GPT-3 transforms how people build and
          communicate in the digital age.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility
