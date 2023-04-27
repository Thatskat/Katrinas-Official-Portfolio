import React from 'react';
import DarkAboutImage from '../assets/[dark]About-me-image.svg';
import LightAboutImage from '../assets/[light]About-me-image.svg';

const About = ({ theme }) => {
  return (
    <div className='pageBackground'>
      <div className='card grid-container'>
        <div className='gridItem'>
        <h1>About Me</h1>
             <p className='subHeading'>I love developing mobile and web applications that are both visually compelling and accessible.</p>
             <p>I&apos;m currently studying a Diploma of Information Technology majoring in Front and Back End Web Development. I have previously attained a Certificate IV in Information Technology majoring in Web Development in 2022.</p>
            <h2>Skillset</h2>
             <p className='subHeading'>Through my studies, I have learnt the following technologies and programming languages:</p>
            <table>
              <tr>
                <td>HTML & CSS</td>
                <td>JavaScript</td>
                <td>PHP</td>
              </tr>
              <tr>
                <td>React.JS</td>
                <td>Node.JS</td>
                <td>SQL</td>
              </tr>
              <tr>
                <td>UX/UI Design and Development</td>
                <td>WordPress</td>
                <td>Adobe Suite</td>
              </tr>
              <tr>
                <td>Figma</td>
                <td>Git</td>
                <td>Microsoft Office</td>
              </tr>
           </table>
        </div>
        <div className='gridItemImage'>
          <img src={ theme === 'dark' ? DarkAboutImage : LightAboutImage} alt="Katrina Gill Animated Image" />
        </div> 
          </div>
        </div>
  )
}

export default About