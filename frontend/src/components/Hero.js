import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      background: '#FFF' 
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to Constructive AI
      </h1>
      <p style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        marginBottom: '2rem' 
      }}>
        Build smarter and manage projects faster with an AI-driven approach to construction workflows.
      </p>
      <button>Get Started</button>
    </section>
  );
};

export default Hero;

