import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact','skills'];
      const navLinks = document.querySelectorAll('nav a');

      sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header>
      <div className="container">
        <h1>Her Portfolio</h1>
        <nav>
          <a href="#hero" onClick={(e) => scrollToTop(e, 'hero')}><FaHome /> Home</a>
          <a href="#about" onClick={(e) => scrollToTop(e, 'about')}><FaUser /> About</a>
          <a href="#services" onClick={(e) => scrollToTop(e, 'services')}><FaBriefcase /> Services</a>
          <a href="#portfolio" onClick={(e) => scrollToTop(e, 'portfolio')}><FaBriefcase /> Portfolio</a>
           <a href="#skills" onClick={(e) => scrollToTop(e, 'skills')}><FaEnvelope /> Skills</a>
          <a href="#contact" onClick={(e) => scrollToTop(e, 'contact')}><FaEnvelope /> Contact</a>
         
        </nav>
      </div>
    </header>
  );
}