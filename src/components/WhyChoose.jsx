import {
  FaUserShield,
  FaClock,
  FaAward,
  FaHandshake,
  FaBuilding,
  FaHeadset,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaUserShield />,
      title: "Verified Security Guards",
      desc: "All guards are professionally trained, background verified and disciplined.",
    },
    {
      icon: <FaClock />,
      title: "24×7 Availability",
      desc: "Round-the-clock security support with quick deployment anywhere in Delhi NCR.",
    },
    {
      icon: <FaAward />,
      title: "Experienced Professionals",
      desc: "Highly experienced security personnel for residential, commercial and industrial sites.",
    },
    {
      icon: <FaBuilding />,
      title: "Corporate Security",
      desc: "Complete security management for offices, factories, malls and business premises.",
    },
    {
      icon: <FaHandshake />,
      title: "Affordable Pricing",
      desc: "Flexible security plans designed according to your business requirements.",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      desc: "Our support team is available 24×7 to handle emergencies and client requests.",
    },
  ];

  return (
    <section className="why-section">

      <div className="section-title">
        <span>WHY CHOOSE US</span>
        <h2>Your Trusted Security Partner</h2>
        <p>
          We provide professional security services with trained manpower,
          fast deployment and complete client satisfaction.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyChoose;