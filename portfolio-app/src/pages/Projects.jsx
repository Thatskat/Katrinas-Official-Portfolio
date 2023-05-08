// IMPORT PROJECT CARD COMPONENT
import Card from '../components/Card';
// IMPORT PROJECT SCREENSHOTS
import Grimleys from '../assets/Past-Projects-Grimleys.webp';
import Coorabin from '../assets/coorabinjrt.webp';
import WindowsXP from '../assets/windowsxpportfolio.webp';

const Projects = () => {

  return (
    <div className='pageBackground'>
      <div className='card'>
        <h1>Past Projects</h1>
        <p className='subHeading'>I&apos;ve developed a few web applications over the past year. Here are some examples of what I&apos;ve been working on.</p>
        <div className='projectSection'>
          <div className='row'>
            <Card image={Grimleys} alt="Grimleys.com.au" title="Grimleys" link="https://grimleys.com.au/" tagOne="WordPress" tagTwo="HTML" tagThree="CSS" tagFour="WordPress Plugins" description={<>Through my studies, I was fortunate enough to be chosen to take part in the Victorian Chamber of Commerce and Industry&apos;s <a href="https://www.victorianchamber.com.au/services/programs-and-grants/summertech-live" target='_blank' rel='noreferrer'> Summer Tech Live (STL)</a> cadetship. Through this cadetship, myself and another student were paired up with Melbourne-based construction supplies company, Grimleys.</>}/>
            <Card image={Coorabin} alt="coorabinjrt.com" title="CoorabinJRT" link="https://coorabinjrt.com/" tagOne="WordPress" tagTwo="HTML" tagThree="CSS" tagFour="WordPress Plugins" description={<>CoorabinJRT is a simple WordPress application that includes an enquiry form, custom CSS features and a modern UI/UX design. Coorabin also demonstrates my knowledge in WordPress Plugins, such as Elementor, WooCommerce and </>}/>
          </div>
          <div className='row'>
            <Card image={WindowsXP} alt="windowsxp.pages.dev" title="WindowsXP Portfolio" link="https://windowsxp.pages.dev/"/>
            <Card />
          </div>
          </div>
        </div>
      </div>
  )
}

export default Projects