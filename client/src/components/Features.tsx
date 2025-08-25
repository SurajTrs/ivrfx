import * as React from 'react';
import { FaFire, FaLink, FaBolt } from 'react-icons/fa';
import '../style.css'; // Custom styles

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaFire size={30} color="#ff6bff" />,
      title: "Swift funding",
      description: "No hidden fees / Fast deposits & withdrawals",
    },
    {
      icon: <FaLink size={30} color="#d8b3ff" />,
      title: "TradingView integration",
      description: "Powerful charts with 100+ indicators",
    },
    {
      icon: <FaBolt size={30} color="#ffde6b" />,
      title: "Lightning fast execution",
      description: "As fast as 0.35 ms",
    },
  ];

  return (
    <div className="features-section bg-black">
      <div className="container py-5">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="mb-3">{feature.icon}</div>
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;