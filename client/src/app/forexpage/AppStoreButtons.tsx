import React from 'react';

type Props = {
  variant?: 'light' | 'dark';
  className?: string;
};

const AppStoreButtons: React.FC<Props> = ({ variant = 'dark', className }) => {
  const isDark = variant === 'dark';
  const base =
    'd-inline-flex align-items-center gap-2 rounded-3 px-3 py-2 text-decoration-none shadow-sm hover-lift';
  const dark = `${base} bg-dark text-white`;
  const light = `${base} bg-white text-dark border`;

  return (
    <div className={`d-flex flex-wrap gap-2 ${className ?? ''}`}>
      <a
        href="https://apps.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={isDark ? dark : light}
        aria-label="Download on the App Store"
      >
        <i className="bi bi-apple fs-5"></i>
        <div className="d-flex flex-column lh-1">
          <small className="opacity-75">Download on the</small>
          <span className="fw-semibold">App Store</span>
        </div>
      </a>
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className={isDark ? dark : light}
        aria-label="Get it on Google Play"
      >
        <i className="bi bi-google-play fs-5"></i>
        <div className="d-flex flex-column lh-1">
          <small className="opacity-75">Get it on</small>
          <span className="fw-semibold">Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;
