import { FaUser } from 'react-icons/fa';
import gisele from '../assets/gisele.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <img src={gisele} alt="Your Photo" />
        <div id="about-content">
          <h2><FaUser /> About Me</h2>
          <p>
            I am a passionate developer with expertise in React, JavaScript, and modern web technologies. With a focus on creating user-friendly and innovative solutions, I strive to deliver high-quality projects that meet client needs and exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}