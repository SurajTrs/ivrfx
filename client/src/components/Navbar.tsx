"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  useEffect(() => {
    const lgBreakpoint = 992; // Bootstrap lg
    const nav = document.querySelector('.navbar');
    if (!nav) return;

    let handlersAttached = false;
    let onDocClick: ((e: MouseEvent) => void) | null = null;

    const closeAll = () => {
      nav.querySelectorAll('.dropdown.show').forEach((d) => d.classList.remove('show'));
      nav.querySelectorAll('.dropdown-menu.show').forEach((m) => m.classList.remove('show'));
      nav.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach((t) => t.setAttribute('aria-expanded', 'false'));
    };

    const attach = () => {
      if (handlersAttached) return;
      handlersAttached = true;
      nav.querySelectorAll<HTMLLIElement>('.dropdown').forEach((item) => {
        const toggle = item.querySelector<HTMLAnchorElement>('.dropdown-toggle');
        const menu = item.querySelector<HTMLUListElement>('.dropdown-menu');
        if (!toggle || !menu) return;

        // debounce close timer per item
        let closeTimer: number | null = null;

        const openNow = () => {
          if (closeTimer) { window.clearTimeout(closeTimer); closeTimer = null; }
          closeAll();
          item.classList.add('show');
          menu.classList.add('show');
          toggle.setAttribute('aria-expanded', 'true');
          // If About is opened on desktop, align its dropdown under Markets
          if (window.innerWidth >= lgBreakpoint && toggle.id === 'aboutDropdown') {
            const markets = nav.querySelector<HTMLAnchorElement>('#marketsDropdown');
            if (markets) {
              const aboutRect = (item as HTMLElement).getBoundingClientRect();
              const marketsRect = markets.getBoundingClientRect();
              // Calculate left offset relative to About li
              const left = Math.round(marketsRect.left - aboutRect.left);
              nav.querySelectorAll<HTMLLIElement>('.dropdown').forEach((item) => {
                const toggle = item.querySelector<HTMLAnchorElement>('.dropdown-toggle');
                const menu = item.querySelector<HTMLUListElement>('.dropdown-menu');
                if (!toggle || !menu) return;
                if (toggle.id === 'aboutDropdown') {
                  (menu as HTMLElement).style.left = left + 'px';
                  (menu as HTMLElement).style.right = 'auto';
                  (menu as HTMLElement).style.transform = 'none';
                }
              });
            }
          }
        };

        const closeNow = () => {
          item.classList.remove('show');
          menu.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
          // reset any inline positioning overrides
          if (toggle.id === 'aboutDropdown') {
            (menu as HTMLElement).style.left = '';
            (menu as HTMLElement).style.right = '';
            (menu as HTMLElement).style.transform = '';
          }
        };

        const scheduleClose = () => {
          if (closeTimer) { window.clearTimeout(closeTimer); }
          closeTimer = window.setTimeout(() => { closeNow(); closeTimer = null; }, 180);
        };

        const cancelClose = () => {
          if (closeTimer) { window.clearTimeout(closeTimer); closeTimer = null; }
        };

        const onEnter = () => { openNow(); };
        const onLeave = () => { scheduleClose(); };
        const onToggleClick = (ev: Event) => {
          // Prevent Bootstrap click toggle on desktop; hover controls state
          if (window.innerWidth >= lgBreakpoint) {
            ev.preventDefault();
            ev.stopPropagation();
          }
        };

        item.addEventListener('mouseenter', onEnter);
        item.addEventListener('mouseleave', onLeave);
        // keep open while hovering menu; cancel scheduled close
        menu.addEventListener('mouseenter', cancelClose);
        menu.addEventListener('mouseleave', onLeave);
        toggle.addEventListener('click', onToggleClick, true);

        // Store listeners for cleanup
        (item as any)._hoverHandlers = { onEnter, onLeave, onToggleClick, cancelClose };
      });

      onDocClick = (e: MouseEvent) => {
        if (window.innerWidth < lgBreakpoint) return;
        const target = e.target as Node;
        if (!nav.contains(target)) {
          closeAll();
        }
      };
      document.addEventListener('click', onDocClick);
    };

    const detach = () => {
      if (!handlersAttached) return;
      handlersAttached = false;
      nav.querySelectorAll<HTMLLIElement>('.dropdown').forEach((item) => {
        const h = (item as any)._hoverHandlers;
        if (h) {
          item.removeEventListener('mouseenter', h.onEnter);
          item.removeEventListener('mouseleave', h.onLeave);
          const toggle = item.querySelector<HTMLAnchorElement>('.dropdown-toggle');
          if (toggle) toggle.removeEventListener('click', h.onToggleClick, true);
          delete (item as any)._hoverHandlers;
        }
      });
      if (onDocClick) {
        document.removeEventListener('click', onDocClick);
        onDocClick = null;
      }
      closeAll();
    };

    const handleResize = () => {
      if (window.innerWidth >= lgBreakpoint) attach();
      else detach();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      detach();
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm py-3 sticky-top">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <img 
            src="/images/logo.jpg" 
            alt="IVRFX Logo" 
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="marketsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Markets
              </a>
              <ul className="dropdown-menu dropdown-menu-dark shadow mega-menu" aria-labelledby="marketsDropdown">
                <li className="mega-col">
                  <h6 className="dropdown-header">Products</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="/markets/forex">Forex</a></li>
                    <li><a className="dropdown-item" href="/markets/shares">Shares</a></li>
                    <li><a className="dropdown-item" href="/markets/commodities">Commodities</a></li>
                    <li><a className="dropdown-item" href="/markets/indices">Indices</a></li>
                    <li><a className="dropdown-item" href="/markets/crypto">Crypto</a></li>
                    <li><a className="dropdown-item" href="/markets/etfs">ETFs</a></li>
                    <li><a className="dropdown-item" href="/markets/bonds">Bonds</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="tradingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Trading
              </a>
              <ul className="dropdown-menu dropdown-menu-dark shadow mega-menu" aria-labelledby="tradingDropdown">
                <li className="mega-col">
                  <h6 className="dropdown-header">Trading Platforms</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="/trading/web-platform">Web Platform</a></li>
                    <li><a className="dropdown-item" href="#">App</a></li>
                    <li><a className="dropdown-item" href="#">TradingView</a></li>
                    <li><a className="dropdown-item" href="#">MT4</a></li>
                    <li><a className="dropdown-item" href="#">MT5</a></li>
                    <li><a className="dropdown-item" href="#">Social Trading</a></li>
                    <li><a className="dropdown-item" href="#">Trading Central</a></li>
                  </ul>
                </li>
                <li className="mega-col">
                  <h6 className="dropdown-header">Trading Tools</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="#">CFD Trading Calculator</a></li>
                    <li><a className="dropdown-item" href="#">Forex Margin Calculator</a></li>
                    <li><a className="dropdown-item" href="#">Commodities Profit Calculator</a></li>
                    <li><a className="dropdown-item" href="#">Forex Profit Calculator</a></li>
                    <li><a className="dropdown-item" href="#">Economic Calendar</a></li>
                  </ul>
                </li>
                <li className="mega-col">
                  <h6 className="dropdown-header">Trading Info</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="#">CFD Trading</a></li>
                    <li><a className="dropdown-item" href="#">CFD Asset List</a></li>
                    <li><a className="dropdown-item" href="#">Trading Conditions</a></li>
                    <li><a className="dropdown-item" href="#">Trading Hours</a></li>
                    <li><a className="dropdown-item" href="#">Expiration Dates</a></li>
                    <li><a className="dropdown-item" href="#">Upcoming Trading Holidays</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="learnDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </a>
              <ul className="dropdown-menu dropdown-menu-dark shadow mega-menu" aria-labelledby="learnDropdown">
                <li className="mega-col">
                  <h6 className="dropdown-header">Education</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="#">Learn to Trade</a></li>
                    <li><a className="dropdown-item" href="#">Trading Basics</a></li>
                    <li><a className="dropdown-item" href="#">Education Centre</a></li>
                    <li><a className="dropdown-item" href="#">Video library</a></li>
                    <li><a className="dropdown-item" href="#">Glossary</a></li>
                    <li><a className="dropdown-item" href="#">Academy</a></li>
                  </ul>
                </li>
                <li className="mega-col">
                  <h6 className="dropdown-header">News & Analysis</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="#">News & Analysis</a></li>
                    <li><a className="dropdown-item" href="#">News</a></li>
                  </ul>
                </li>
                <li className="mega-col">
                  <h6 className="dropdown-header">Events</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="#">Trader's clinic</a></li>
                    <li><a className="dropdown-item" href="#">Webinars</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="partnershipsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Partnerships
              </a>
              <ul className="dropdown-menu dropdown-menu-dark shadow" aria-labelledby="partnershipsDropdown">
                <li><a className="dropdown-item" href="#">Affiliation</a></li>
                <li><a className="dropdown-item" href="#">IB</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu dropdown-menu-dark shadow mega-menu" aria-labelledby="aboutDropdown">
                <li className="mega-col">
                  <h6 className="dropdown-header">Company</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="#">About IVRFX</a></li>
                    <li><a className="dropdown-item" href="#">Why IVRFX</a></li>
                    <li><a className="dropdown-item" href="#">Global Offering</a></li>
                    <li><a className="dropdown-item" href="#">Our Group</a></li>
                    <li><a className="dropdown-item" href="#">Career</a></li>
                    <li><a className="dropdown-item" href="#">Awards and Media</a></li>
                  </ul>
                </li>
                <li className="mega-col">
                  <h6 className="dropdown-header">Support</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="#">Help Support</a></li>
                    <li><a className="dropdown-item" href="#">FAQ</a></li>
                    <li><a className="dropdown-item" href="#">Help Centre</a></li>
                    <li><a className="dropdown-item" href="#">Contact Support</a></li>
                    <li><a className="dropdown-item" href="#">Complaints</a></li>
                  </ul>
                </li>
                <li className="mega-col">
                  <h6 className="dropdown-header">Legal & Security</h6>
                  <ul className="list-unstyled m-0">
                    <li><a className="dropdown-item" href="#">Data & Security</a></li>
                    <li><a className="dropdown-item" href="#">Safety Online</a></li>
                    <li><a className="dropdown-item" href="#">Cookie Disclosure</a></li>
                    <li><a className="dropdown-item" href="#">Legal Pack</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-search text-white fs-5"></i>
          <select className="bg-black border-0 text-white small px-2">
            <option>EN</option>
            <option>FR</option>
          </select>
          <Link href="/auth/login" className="btn btn-outline-light btn-sm px-3">Login</Link>
          <Link href="/auth/register" className="btn btn-success btn-sm px-3">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
