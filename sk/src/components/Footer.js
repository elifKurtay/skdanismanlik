import React from 'react';
import './Footer.css';
import {ILETISIM} from '../constants';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className='footer-container' id="footer">
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          {ILETISIM.title}
        </p>
        <p className='footer-subscription-text'>
          {ILETISIM.alt}
        </p>
          <Link
              className='footer-subscription-email'
              to='#'
              onClick={(e) => {
                  window.location.href = "mailto:" + ILETISIM.email;
                  e.preventDefault();
              }}
          >
              {ILETISIM.email}
          </Link>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>{ILETISIM.footer}</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;