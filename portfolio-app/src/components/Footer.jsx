import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='inline'>
        <a href="https://www.linkedin.com/in/katrina-gill-a66090259/" target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
        <a href="https://github.com/Thatskat" target='_blank' rel='noreferrer'><AiFillGithub /></a>
      </div>
      <p className='smallText'>Created by Katrina Gill &copy; 2023</p>
    </footer>
  )
}

export default Footer