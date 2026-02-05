import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../Components'
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="GPT-3 (Generative Pre-trained Transformer 3) is a powerful artificial intelligence model developed by OpenAI. It is trained on vast amounts of text data and can understand context, generate human-like language, answer questions, write content, translate languages, and assist with complex problem-solving all through natural language."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="GPT-3 powers intelligent chatbots that can hold natural conversations, provide customer support, answer questions, and adapt responses based on user intent."
        />
        <Feature
          title="Knowledgebase"
          text="From writing articles and summaries to generating code and documentation, GPT-3 can act as a dynamic knowledge engine that helps individuals and teams work faster and smarter."
        />
        <Feature
          title="Education"
          text="GPT-3 can personalize learning experiences by explaining complex topics, tutoring students, generating practice questions, and supporting self-paced education across multiple subjects."
        />
      </div>
    </div>
  );
}

export default WhatGPT3
