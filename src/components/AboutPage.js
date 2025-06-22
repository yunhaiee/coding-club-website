import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About <span className="highlight">Coding Club</span></h1>
          <p className="hero-subtitle">
            Empowering developers through collaboration, learning, and innovation
          </p>
        </div>
      </div>

      <div className="container">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="section-content">
            <div className="text-content">
              <h2>Our Mission</h2>
              <p>
                <span className="highlight">Coding Club</span> is a vibrant community of passionate developers dedicated to fostering 
                innovation, collaboration, and continuous learning. We believe that the best 
                code is written together, and that every developer has something valuable to 
                contribute to the community.
              </p>
              <p>
                Our mission is to create an inclusive environment where developers of all skill 
                levels can grow, share knowledge, and build amazing projects that make a difference 
                in the world.
              </p>
            </div>
            <div className="visual-content">
              <div className="mission-visual">
                <div className="visual-icon">🎯</div>
                <h3>Innovation</h3>
                <p>Pushing boundaries with cutting-edge technology</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and collective intelligence. We learn from each other.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Learning</h3>
              <p>Technology evolves rapidly, and so do we. We stay updated with the latest trends.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We encourage creative thinking and innovative solutions. No idea is too big or too small.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Impact</h3>
              <p>We build solutions that matter. We aim to make a positive difference in people's lives.</p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="history-section">
          <div className="section-content">
            <div className="visual-content">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">2024 August</div>
                  <div className="timeline-content">
                    <h4>Foundation</h4>
                    <p><span className="highlight">Coding Club</span> founded - the first coding club in the school community.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2024 September</div>
                  <div className="timeline-content">
                    <h4>Expansion</h4>
                    <p>Expansion with incoming new members joining the community.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2024 October</div>
                  <div className="timeline-content">
                    <h4>First Event</h4>
                    <p>Daejeon Science Festival - showcasing our projects and skills.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2025</div>
                  <div className="timeline-content">
                    <h4>Ongoing Activities</h4>
                    <p>Continuing to grow and innovate with various activities and projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-content">
              <h2>Our Journey</h2>
              <p>
                What started as the first coding club in our school community has grown into a thriving 
                community of developers, designers, and innovators. Our journey has been marked by 
                countless hours of collaboration, learning, and building amazing things together.
              </p>
              <p>
                From our humble beginnings in August 2024 to our current status as a leading student 
                development community, we've remained true to our core values while continuously 
                evolving and adapting to the changing landscape of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar"> 👩‍💻</div>
              <h3>Yunha Lee</h3>
              <p className="member-role">President & Founder<br />(24-25, 25-26)</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"> 👨‍💻</div>
              <h3>Minsoo Kwon</h3>
              <p className="member-role">Vice President<br />(25-26)</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"> 👨‍💻</div>
              <h3>Max Kim</h3>
              <p className="member-role">Secretary<br />(24-25, 25-26)</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"> 👩‍💻</div>
              <h3>Julia Jeong</h3>
              <p className="member-role">Treasurer<br />(25-26)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
