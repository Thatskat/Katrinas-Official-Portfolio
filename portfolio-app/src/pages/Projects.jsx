import React, { useState } from 'react';
// IMPORT REACT MODAL LIBRARY
import Modal from 'react-modal';
// IMPORT PROJECT SCREENSHOTS
import Grimleys from '../assets/Past-Projects-Grimleys.webp';

Modal.setAppElement('#root');

const Projects = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    modal === 'false' ? setModal(true) : setModal(false);
  }

  return (
    <div className='pageBackground'>
      <div className='card'>
        <h1>Past Projects</h1>
        <p className='subHeading'>I&apos;ve developed a few web applications over the past year. Here are some examples of what I&apos;ve been working on.</p>
        <div className='projectSection'>
          <div className='row'>
             <div className='projectCard'>
            <img src={Grimleys} alt="Grimleys.com.au" />
            <p className='cardTitle'>Grimleys - <a href="https://grimleys.com.au/" target='_blank' rel='noreferrer'>grimleys.com.au</a></p>
            <span>Tags: <p><span>WordPress</span>, <span>HTML</span>, <span>CSS</span>, <span>WordPress Plugins</span></p></span>
            <p className='cardDescription'>Through my studies, I was fortunate enough to be chosen to take part in the Victorian Chamber of Commerce and Industry&apos;s <a href="https://www.victorianchamber.com.au/services/programs-and-grants/summertech-live" target='_blank' rel='noreferrer'>Summer Tech Live (STL)</a> cadetship. Through this cadetship, myself and another student were paired up with Melbourne-based construction supplies company, Grimleys. <button onClick={() => toggleModal}>Read More</button></p>
          </div>
            <div className='projectCard'>
            <img src={Grimleys} alt="Grimleys.com.au" />
            <p className='cardTitle'>Grimleys - <a href="https://grimleys.com.au/" target='_blank' rel='noreferrer'>grimleys.com.au</a></p>
            <span>Tags: <p><span>WordPress</span>, <span>HTML</span>, <span>CSS</span>, <span>WordPress Plugins</span></p></span>
            <p className='cardDescription'>Through my studies, I was fortunate enough to be chosen to take part in the Victorian Chamber of Commerce and Industry&apos;s <a href="https://www.victorianchamber.com.au/services/programs-and-grants/summertech-live" target='_blank' rel='noreferrer'>Summer Tech Live (STL)</a> cadetship. Through this cadetship, myself and another student were paired up with Melbourne-based construction supplies company, Grimleys. <button>Read More</button></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects