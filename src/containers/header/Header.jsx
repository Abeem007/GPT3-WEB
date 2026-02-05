import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const {setAuthType} = useAuth()
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          GPT-3 is a powerful language model developed by OpenAI that
          understands and generates human-like text. From chatbots and content
          creation to knowledge systems and automation, GPT-3 helps you build
          smarter, faster, and more intuitive digital experiences.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button onClick={() => setAuthType("signup")} type="button">
            Get Started
          </button>
        </div>
        <div className="gpt3__header__people">
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header
