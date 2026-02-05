import React from 'react'
import './features.css';
import Feature from '../../Components/feature/Feature';
const featuresData = [
  {
    title: "Advanced Natural Language Understanding",
    text: "GPT-3 can understand and interpret human language with remarkable accuracy, enabling it to respond to questions, and generate meaningful text across a wide range of topics.",
  },
  {
    title: "Context-Aware Text Generation",
    text: "By analyzing context and intent, GPT-3 generates coherent and relevant responses that feel natural, making it suitable for conversations, writing tasks, and creative applications.",
  },
  {
    title: "Developer-Friendly AI Integration",
    text: "GPT-3 can be integrated into applications using simple APIs, allowing developers to build intelligent features such as chatbots, content generators, and virtual assistants with minimal setup.",
  },
  {
    title: "Scalable Across Industries",
    text: "From education and healthcare to finance and customer support, GPT-3 adapts to different domains, providing AI-driven solutions that scale with business and user needs.",
  },
];
const Features = () => {  
  return (
    <div className='gpt3__features section__padding' id='features'>
       <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
       </div>
       <div className='gpt3__features-container'> 
         {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text}key={item.title+index}/>
          ))}
       </div>
    </div>
  )
}

export default Features
