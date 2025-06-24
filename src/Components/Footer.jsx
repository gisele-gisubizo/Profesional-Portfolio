import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 Gisubizo Gisele. All rights reserved.</p>
        <div>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}