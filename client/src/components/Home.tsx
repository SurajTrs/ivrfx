import * as React from 'react';

const Home: React.FC = () => {
  return (
    <div
      className="position-relative text-white min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: "url('/images/bg-pattern.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Blur Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backdropFilter: 'blur(6px)',   // Adjust blur strength
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
          zIndex: 1
        }}
      ></div>

      {/* Content */}
      <div className="container py-3 position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4">
              Ivrfx x TradingView
            </h1>
            <p className="fs-5 mb-4">
              Experience next-level trading with powerful charts,
              fast execution, and competitive spreads.
            </p>
            <button className="btn btn-lg btn-purple px-4 py-2 mb-4">
              Get started
            </button>

            <div className="mt-4 fs-5">
              <span>Great </span>
              <span className="star-rating fs-4">⭐⭐⭐⭐⭐</span>
              <span> 1,221 reviews on Trustpilot</span>
            </div>

            <div className="mt-4 fs-5">
              <div className="badge bg-dark text-light p-2 mb-2">
                <strong>Exclusive</strong>
              </div>
              <div>
                <span className="text-primary">Essential</span>: Free 2-month
                TradingView trial
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="/images/trading-illustration.png"
              alt="Trading Illustration"
              className="img-fluid"
              style={{ maxHeight: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
