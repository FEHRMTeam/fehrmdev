import React from 'react';
import logo from '../images/fehrmlogo.png';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://18f.gsa.gov">
                <img src={logo} width="50" alt="Agency logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li><Link to="/about-fehrm">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/faq"> Frequently Asked Questions</Link></li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li><Link to="https://www.linkedin.com/company/fehrm/">FEHRM LinkedIn Page</Link></li>
              <li><Link to="https://www.ehrm.va.gov/">Office of Electronic health Record Modernization</Link></li>
              <li><Link to="https://www.health.mil/About-MHS/OASDHA/Defense-Health-Agency/Defense-Healthcare-Management-Systems">Defense Healthcare Management Systems</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
