import { FaImages } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import figma1 from '../assets/figma1.png';
import figma2 from '../assets/figma2.png';
import figma3 from '../assets/figma3.png';

export default function Portfolio() {
  const projects = [
    { 
      title: "Plumbing Community App", 
      image: project1,
      description: "A mobile and web app designed for a plumbing community, enabling plumbers to connect with clients, schedule services, and share resources. Built with React Native and Node.js."
    },
    { 
      title: "E-Commerce Dashboard", 
      image: project2,
      description: "An admin dashboard for an e-commerce platform, featuring real-time sales tracking, inventory management, and user analytics. Developed using React and integrated with a Node.js backend."
    },
    { 
      title: "Choir Management System", 
      image: project3,
      description: "A web-based system for choir management, including event scheduling, member directories, and performance tracking. Created with React and Node.js."
    },
  ];

  const figmaDesigns = [
    { 
      title: "Cleaning Company Admin Page", 
      image: figma1,
      description: "Figma design for an admin dashboard tailored for a cleaning company, featuring task management, employee scheduling, and performance metrics, created to optimize operational efficiency."
    },
    { 
      title: "Cleaning Company Mobile App", 
      image: figma2,
      description: "Figma design for a mobile app for a cleaning company, offering on-the-go booking, service tracking, and customer feedback features for enhanced mobility and user convenience."
    },
    { 
      title: "Organization Creation Form", 
      image: figma3,
      description: "Figma design for a form to create organizations, enabling users to set up teams, define roles, and collaborate effectively, designed to foster teamwork and project management."
    },
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2><FaImages /> Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {index < figmaDesigns.length && (
                <div className="figma-card">
                  <img src={figmaDesigns[index].image} alt={`${figmaDesigns[index].title} Figma Design`} className="figma-design" />
                  <h4>{figmaDesigns[index].title}</h4>
                  <p>{figmaDesigns[index].description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}