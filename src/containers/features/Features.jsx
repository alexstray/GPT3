import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {title: 'Improving end results instantly',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugit modi repellat corporis iure itaque iste, doloribus ut nam harum distinctio perspiciatis temporibus sit magnam.'},
  {title: 'Improving end results instantly',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugit modi repellat corporis iure itaque iste, doloribus ut nam harum distinctio perspiciatis temporibus sit magnam.'},
  {title: 'Improving end results instantly',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugit modi repellat corporis iure itaque iste, doloribus ut nam harum distinctio perspiciatis temporibus sit magnam.'},
  {title: 'Improving end results instantly',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugit modi repellat corporis iure itaque iste, doloribus ut nam harum distinctio perspiciatis temporibus sit magnam.'},
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future Is Now. Step Into It Today & Make Change Happen.</h1>
        <p>Request Early Access To Get Started.</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
