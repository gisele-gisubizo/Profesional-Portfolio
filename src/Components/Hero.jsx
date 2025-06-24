import { FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <h1>Gisubizo Gisele</h1>
        <h2>Full Stacker Developer</h2>
        <p>Building digital experiences that inspire and engage through code.</p>
        <button>Download CV <FaDownload /></button>
      </div>
    </section>
  );
}