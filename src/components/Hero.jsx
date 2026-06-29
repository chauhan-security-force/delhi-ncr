import heroImage from "../assets/hero.png";
import { FaPhoneAlt, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(5,15,35,.85), rgba(5,15,35,.85)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">

        <div className="hero-badge">
          <FaShieldAlt />
          Trusted Security Agency
        </div>

        <h1>
          Trusted <span>Security Services</span>
          <br />
          Across Delhi NCR
        </h1>

        <p>
          Professional Security Guards, Gunmen, Bouncers &
          Personal Security Officers for Residential,
          Commercial, Industrial and VIP Security.
        </p>

       <div className="hero-buttons">

  {/* GET QUOTE → WhatsApp (BEST FOR BUSINESS) */}
  <a
    href="https://wa.me/919217121563?text=Hi%20I%20need%20a%20security%20quote"
    target="_blank"
    rel="noreferrer"
    className="primary-btn"
  >
    Get Free Quote
  </a>

  {/* CALL NOW → Phone Dial */}
  <a href="tel:+919217121563" className="secondary-btn">
    <FaPhoneAlt />
    Call Now
  </a>

</div>

        <div className="hero-features">

          <div>
            <FaCheckCircle />
            Police Verified
          </div>

          <div>
            <FaCheckCircle />
            24×7 Support
          </div>

          <div>
            <FaCheckCircle />
            Trained Guards
          </div>

          <div>
            <FaCheckCircle />
            Quick Deployment
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;