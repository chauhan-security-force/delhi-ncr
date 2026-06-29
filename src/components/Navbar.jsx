import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <h2>CSF</h2>
      </div>

      {/* DESKTOP MENU */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#industries">Industries</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* CALL BUTTON (DESKTOP) */}
      <a href="tel:+919217121563" className="call-btn">
        <FaPhoneAlt />
        Call Now
      </a>

      {/* MOBILE MENU ICON (RIGHT SIDE SMALL) */}
      <div className="mobile-icon" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#industries" onClick={() => setOpen(false)}>Industries</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        <a href="tel:+919217121563" className="mobile-call">
          <FaPhoneAlt />
          Call Now
        </a>

      </div>

    </nav>
  );
}

export default Navbar;