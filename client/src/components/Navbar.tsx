import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm py-3">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#">
  <img 
    src="/images/logo.jpg" 
    alt="Markets.com Logo" 
    height="80" 
    className="d-inline-block align-text-top"
  />
</a>


        {/* Toggler (Mobile Menu Button) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links - Centered */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4 fs-6">
            <li className="nav-item"><a className="nav-link" href="#">Markets</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Trading</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Learn</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Partnership</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-search text-white fs-5"></i>
          <select className="bg-black border-0 text-white small px-2">
            <option>EN</option>
            <option>FR</option>
          </select>
          <button className="btn btn-outline-light btn-sm px-3">Login</button>
          <button className="btn btn-success btn-sm px-3">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
