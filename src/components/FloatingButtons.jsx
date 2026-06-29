import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="floating-buttons">

      {/* CALL BUTTON */}
      <a href="tel:+919217121563" className="float-btn call">
        <FaPhoneAlt />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919217121563?text=Hi%20I%20need%20security%20services"
        target="_blank"
        rel="noreferrer"
        className="float-btn whatsapp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default FloatingButtons;