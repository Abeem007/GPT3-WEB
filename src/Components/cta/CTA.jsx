import React from 'react'
import './cta.css'
import { useAuth } from "../../context/AuthContext";

const CTA = () => {
   const { setAuthType } = useAuth();
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button onClick={() => setAuthType("signup")} type="button">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default CTA
