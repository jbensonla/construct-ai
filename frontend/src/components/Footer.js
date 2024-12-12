import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem',
      textAlign: 'center',
      color: '#666',
      fontSize: '0.9rem'
    }}>
      © {new Date().getFullYear()} Constructive AI. All rights reserved.
    </footer>
  );
};

export default Footer;

