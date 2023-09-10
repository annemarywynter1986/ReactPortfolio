import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types"; // Import PropTypes

export const socials = [
  {
    link: "https://github.com/annemarywynter1986",
    icon: faGithub,
    label: 'github'
  },
  {
    link: "https://www.linkedin.com/in/anne-mary-wynter-958852229/",
    icon: faLinkedin,
    label: 'linkedin'
  }
];

const Footer = ({ socials }) => { // Pass socials as a prop
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ label, link, icon, color }) => (
            <div
              key={label}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={link}
                className={`icon ${label}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${label}'s profile on ${icon.iconName}`}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="footer-icon-size"
                  style={{ color }}
                />
              </a>
              <a href={link} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{label}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
          <h5 className="designer-text">Designed with 🫀 by Anne Mary Wynter</h5>
          <p>
            <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
          </p>
        </section>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired, // You might need to adjust this based on the FontAwesome icon prop type
      label: PropTypes.string.isRequired,
      color: PropTypes.string, // Optional
    })
  ).isRequired, // Make sure socials is required
};

export default Footer;
