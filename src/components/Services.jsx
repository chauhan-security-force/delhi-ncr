import {
  FaShieldAlt,
  FaUserSecret,
  FaUserTie,
  FaBuilding,
  FaUsers,
  FaHome,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Security Guards",
      desc: "Professional trained security guards for residential, commercial and industrial security.",
    },
    {
      icon: <FaUserSecret />,
      title: "Gunman Services",
      desc: "Licensed armed security personnel for VIP and high-risk protection.",
    },
    {
      icon: <FaUserTie />,
      title: "PSO Services",
      desc: "Personal Security Officers for executives, celebrities and VIPs.",
    },
    {
      icon: <FaUsers />,
      title: "Bouncer Services",
      desc: "Experienced bouncers for events, parties, clubs and weddings.",
    },
    {
      icon: <FaBuilding />,
      title: "Corporate Security",
      desc: "Professional security solutions for offices, malls and businesses.",
    },
    {
      icon: <FaHome />,
      title: "Residential Security",
      desc: "Reliable security guards for apartments, societies and villas.",
    },
  ];

  return (
    <section id="services" className="services">

      {/* Heading */}

      <div className="section-title">

        <span>OUR SERVICES</span>

        <h2>Our Security Services</h2>

        <p>
          We provide reliable and professional security solutions for
          residential, commercial, industrial and VIP protection across
          Delhi NCR.
        </p>

      </div>

      {/* Cards */}

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <div className="service-actions">
  <a href="tel:+919217121563" className="call-btn">
    <FaPhoneAlt />
    Call
  </a>

  <a
    href="https://wa.me/919217121563"
    target="_blank"
    rel="noreferrer"
    className="whatsapp-btn"
  >
    WhatsApp
  </a>
</div>

          </div>
        ))}

      </div>

      

    </section>
  );
}

export default Services;