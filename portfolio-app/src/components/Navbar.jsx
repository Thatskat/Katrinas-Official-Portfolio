import React from 'react';
import { Outlet } from 'react-router-dom';
import { Lightbulb } from "@theme-toggles/react";
import { WavyLink } from 'react-wavy-transitions';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav>
    <label htmlFor="Lightbulb">
      <span className='hidden'>Toggle Display - Light and Dark Mode</span>
      <Lightbulb duration={800} onToggle={toggleTheme} toggled={theme === 'dark'}/>
    </label>
    <div className='navLinks'>
      <WavyLink to="/" color="#9ba17f">
        Welcome
      </WavyLink>
      <WavyLink to="/about" color="#9ba17f">
        About Me
      </WavyLink>
      <WavyLink to="/projects" color="#9ba17f">
        Past Projects
      </WavyLink>
    </div>
      <Outlet />
    </nav>
  )
}

export default Navbar