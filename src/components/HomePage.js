import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <br /><span className="highlight">Coding Club</span>
          </h1>
          <p className="hero-subtitle">
            Where passion meets programming. Join our community of developers, 
            learn new technologies, and build amazing projects together.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Join Us
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img 
              src="images/daejeon science festival/Screenshot_2025-06-22_at_6.40.53_PM.png" 
              alt="Coding Club at Daejeon Science Festival" 
            />
          </div>
          <div className="code-animation">
            <div className="code-line" dangerouslySetInnerHTML={{__html: `const codingClub = {`}}></div>
            <div className="code-line indent">passion: "programming",</div>
            <div className="code-line indent">community: "developers",</div>
            <div className="code-line indent" dangerouslySetInnerHTML={{__html: `goal: "<strong>LEARN TOGETHER AND BUILD ETHICAL PROGRAMMERS</strong>"`}}></div>
            <div className="code-line" dangerouslySetInnerHTML={{__html: `}`}}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Code Together</h3>
              <p>Collaborate on projects, share knowledge, and learn from each other in a supportive environment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Build Projects</h3>
              <p>Work on real-world projects that challenge your skills and help you grow as a developer.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Learn & Grow</h3>
              <p>Stay updated with the latest technologies and best practices in software development.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Network</h3>
              <p>Connect with like-minded developers and build professional relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Events Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hours of Meeting</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Coding Journey?</h2>
          <p>Join our community and take your programming skills to the next level.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
