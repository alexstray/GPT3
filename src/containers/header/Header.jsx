import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const header = () => {
  return (
    <div className='gpt3__header' id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Let's Build Something Amazing With GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime itaque doloremque suscipit. Explicabo enim sed necessitatibus molestiae officia aliquid autem quibusdam cumque quidem quam beatae itaque velit, obcaecati minus.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="Users" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="AI" />
        </div>
    </div>
  )
}

export default header
