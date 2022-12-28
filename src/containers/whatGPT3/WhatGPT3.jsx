import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='#wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3?' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse qui odio nobis deleniti, fugiat similique voluptates! Architecto suscipit expedita quo porro facere voluptates excepturi corrupti aspernatur? Consequuntur odio recusandae officia, reiciendis ipsa sed deserunt aut totam eos ipsam nulla aliquid, doloribus veniam? Dolorem rem laboriosam tempora asperiores quas excepturi.' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio incidunt placeat ducimus laudantium eius voluptates ullam molestias dicta cumque labore.' />
        <Feature title='Knowledgebase' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio incidunt placeat ducimus laudantium eius voluptates ullam molestias dicta cumque labore.' />
        <Feature title='Education' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio incidunt placeat ducimus laudantium eius voluptates ullam molestias dicta cumque labore.' />
      </div>
    </div>
  )
}

export default WhatGPT3
