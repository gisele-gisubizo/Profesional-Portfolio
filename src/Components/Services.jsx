import { FaCode, FaPaintBrush, FaLaptop } from 'react-icons/fa';

export default function Services() {
  const services = [
    { 
      title: "UI/UX", 
      desc: "Designing intuitive and visually stunning user interfaces to enhance user engagement.", 
      icon: FaPaintBrush 
    },
    { 
      title: "Full-Stack Development", 
      desc: "End-to-end development using React, Node.js, and databases to build robust applications.", 
      icon: FaLaptop 
    },
    { 
      title: "Frontend & Backend", 
      desc: "Expertise in crafting front-end interfaces with HTML, CSS, and React, paired with backend solutions using Node.js.", 
      icon: FaCode 
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <h2>Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <service.icon size={40} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}