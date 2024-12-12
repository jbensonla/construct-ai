import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      padding: '1rem 2rem',
      background: '#1E1E1E',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: '700' }}>Construction AII</div>
      <div>
        <a href="/projects" style={{ marginRight: '1rem', color: '#fff' }}>Projects</a>
        <a href="/login" style={{ color: '#fff' }}>Login</a>
      </div>
    </nav>
  );
};

export default Navbar;

