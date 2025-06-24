import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2025 Gisubizo Gisele. All rights reserved.</p>
        <div className="social-links">
       
          <a
            href="https://www.instagram.com/_gisubizo_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/gisubizo-gisele-b40410318"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.me/0798735953"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}