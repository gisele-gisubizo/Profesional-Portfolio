import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2><FaEnvelope /> Get in Touch</h2>
        <form id="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}