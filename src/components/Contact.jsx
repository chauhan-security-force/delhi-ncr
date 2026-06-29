import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      {/* TITLE */}
      <div className="section-title">
        <span>CONTACT US</span>
        <h2>Get In Touch</h2>
        <p>We are available 24×7 for security services and quick deployment</p>
      </div>

      {/* CONTACT BOXES */}
      <div className="contact-grid">

        <div className="contact-card">
          <FaPhoneAlt />
          <h3>Call Us</h3>
          <a href="tel:+919217121563">+91 9217121563</a>
        </div>

        <div className="contact-card">
          <FaWhatsapp />
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/919217121563?text=Hi%20I%20need%20security%20services"
            target="_blank"
            rel="noreferrer"
          >
            Chat Now
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>Delhi NCR, India</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;