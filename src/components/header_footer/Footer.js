import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer>
      <Fade triggerOnce delay={500}>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          The venue 2021 all right reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;

//react-awesome-reveal ngasih effect kaya animate css
