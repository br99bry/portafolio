import React from 'react';

import './styles/Footer.scss';

const Footer = ({isActive}) => {
  
  return (
        <React.Fragment>
          {isActive ?
          <div className="Footer"></div>
          : 
          <React.Fragment /> }
        </React.Fragment>
      )
  
}

export default Footer;