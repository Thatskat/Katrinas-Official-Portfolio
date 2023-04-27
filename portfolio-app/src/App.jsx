import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WavyContainer } from 'react-wavy-transitions';

// PAGE COMPONENTS
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import PageNotFound from './pages/PageNotFound';

// PAGE LAYOUT COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// CREATE CONTEXT
export const ThemeContext = createContext(null);

function App() {

// DEFINE COLOUR THEME STATE
const [theme, setTheme] = useState(null);

// TOGGLE THEME
const toggleTheme = () => {
  setTheme((current) =>(current === 'light' ? 'dark' : 'light'));
  saveThemeSettings();
}

// DEFAULT THEME SETTINGS
const defaultSettings = () => {
  const preferD = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches;
  if(preferD){
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// PRESAVED USER THEME SETTINGS
const loadUserSettings = () => {
  let userSettings = localStorage.getItem('userSettings');
  if(userSettings){
    userSettings = JSON.parse(userSettings);
    setTheme(userSettings.theme)
  } else {
    defaultSettings()
  }
}

if(!theme){
  loadUserSettings();
}

// SAVE USER THEME PREFERENCES
const saveThemeSettings = () => {
  localStorage.setItem('userSettings', JSON.stringify({theme: theme === 'light' ? 'dark' : 'light'}))
}

return (
  <ThemeContext.Provider value={{ theme, toggleTheme}}>
  <div id={theme}>
    <BrowserRouter>
    <WavyContainer />
    <Navbar theme={theme} toggleTheme={toggleTheme}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About theme={theme}/>} />
      <Route path='/projects' element={<Projects />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>
  </ThemeContext.Provider>
)
}
export default App
