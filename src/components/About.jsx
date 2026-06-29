import {
  FaShieldAlt,
  FaUserCheck,
  FaBuilding,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="section-title">

        <span>ABOUT US</span>

        <h2>Why Choose Chauhan Security Force?</h2>

        <p>
          We provide trusted and professional security services for
          residential, commercial and industrial sectors across Delhi NCR.
        </p>

      </div>

      <div className="about-wrapper">

        {/* LEFT */}

        <div className="about-left">

          <div className="about-image-card">

            <FaShieldAlt className="about-main-icon" />

            <h3>Trusted Security Partner</h3>

            <p>
              Delivering professional security solutions with trained,
              verified and disciplined security personnel.
            </p>

            <div className="about-stats">

              <div>
                <h2>24×7</h2>
                <span>Support</span>
              </div>

              <div>
                <h2>100%</h2>
                <span>Verified</span>
              </div>

              <div>
                <h2>50+</h2>
                <span>Security Staff</span>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <div className="about-feature">

            <FaShieldAlt />

            <div>

              <h3>Professional Security Guards</h3>

              <p>
                Highly trained guards for residential,
                commercial and industrial protection.
              </p>

            </div>

          </div>

          <div className="about-feature">

            <FaUserCheck />

            <div>

              <h3>Police Verified Staff</h3>

              <p>
                Every guard is verified and professionally trained.
              </p>

            </div>

          </div>

          <div className="about-feature">

            <FaBuilding />

            <div>

              <h3>All Industry Coverage</h3>

              <p>
                Corporate offices, societies, factories,
                schools and events.
              </p>

            </div>

          </div>

          <div className="about-buttons">

            <a href="tel:+919217121563" className="primary-btn">

              <FaPhoneAlt />

              Call Now

            </a>

           <a href="tel:+919217121563" className="secondary-btn">
  Call for Quote

              <FaArrowRight />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;