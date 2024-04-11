import React from 'react'
import './whatgpt3.css'
import {Feature} from '../../components'


const Whatgpt3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is an advanced AI model capable of generating human-like text based on input prompts, enabling various applications in natural language processing and understanding."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="A chatbot powered by GPT-3 harnesses the model's vast knowledge and linguistic prowess to engage users in conversations that feel remarkably human-like, offering assistance, information, and entertainment across diverse domains and applications."/>
        <Feature title="Knowledge Base" text="
Incorporating GPT-3 into a knowledge base enhances it with comprehensive and dynamically updated information. This AI model's ability to understand and generate human-like text ensures users receive accurate and insightful responses across various topics and inquiries."/>
        <Feature title="Education" text="GPT-3 revolutionizes education by offering personalized learning experiences. Its ability to generate tailored explanations, answer queries, and simulate discussions empowers students to explore concepts deeply and educators to create engaging content."/>
      </div>
    </div>
  )
}

export default Whatgpt3
