import {
  FaBuilding,
  FaHome,
  FaIndustry,
  FaHotel,
  FaSchool,
  FaGlassCheers,
} from "react-icons/fa";

function Industries() {
  const data = [
    {
      icon: <FaBuilding />,
      title: "Corporate Offices",
    },
    {
      icon: <FaHome />,
      title: "Residential Societies",
    },
    {
      icon: <FaIndustry />,
      title: "Factories & Warehouses",
    },
    {
      icon: <FaHotel />,
      title: "Hotels & Malls",
    },
    {
      icon: <FaSchool />,
      title: "Schools & Colleges",
    },
    {
      icon: <FaGlassCheers />,
      title: "Events & Functions",
    },
  ];

  return (
    <section id="industries" className="industries">

      <div className="section-title">
        <h2>Industries We Serve</h2>
        <p>We provide security solutions across multiple sectors</p>
      </div>

      <div className="industries-grid">

        {data.map((item, index) => (
          <div className="industry-card" key={index}>
            <div className="industry-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Industries;