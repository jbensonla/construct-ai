import React, { useState, useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Ensure your backend is running on port 4000 and returns project data
    fetch('http://localhost:4000/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Auth0Provider
      domain="dev-tgxsq83nzcqlz78.us.auth0.com"
      clientId="PrUzINd0Wg0rRrwbuX7be1oQRHHX8pT0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {/* Hero Section */}
      <div className="container-fluid py-5 mb-4 bg-light rounded-3">
        <div className="container px-5">
          <h1 className="display-4 fw-bold">Welcome to My App</h1>
          <p className="lead">
            This is where you can manage your projects, bid on new opportunities, and more.
          </p>
          <LoginButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <h2 className="mb-3">Projects</h2>
        <ul className="list-unstyled">
          {projects.map((project) => (
            <li key={project.id} className="mb-2">
              <strong>{project.name}</strong> - {project.address}
            </li>
          ))}
        </ul>

        <hr className="my-5" />

        {/* Future Categories Section */}
        <h2 className="mb-3">Future Categories</h2>
        <p className="text-muted">
          Coming soon: More features, categories, and enhancements to streamline your workflow!
        </p>
      </div>
    </Auth0Provider>
  );
}

export default App;
