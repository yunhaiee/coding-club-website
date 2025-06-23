import React from 'react';
import './ActivitiesPage.css';

const activities = [
  {
    name: 'Daejeon Science Festival',
    date: 'OCT 18-20, 2024',
    participants: 'All club members',
    status: 'Completed',
    explanation: "Participated in the Daejeon Science Festival, teaching children to code with the Entry platform.",
    audience: "Festival attendees, mainly children and families from the local community.",
    mission: "Gave back to the community by showing children how to use technology creatively and responsibly, inspiring the next generation of developers.",
    images: [
      'images/daejeon_science_festival/Screenshot_2025-06-22_at_2.41.41_PM.png',
      'images/daejeon_science_festival/Screenshot_2025-06-22_at_2.42.26_PM.png',
      'images/daejeon_science_festival/Screenshot_2025-06-22_at_2.43.02_PM.png',
      'images/daejeon_science_festival/Screenshot_2025-06-22_at_2.43.17_PM.png',
    ],
    source: 'Photos by Coding Club'
  },
  {
    name: 'Tutoring sessions',
    date: 'All semesters',
    participants: 'All club members',
    status: 'Completed',
    explanation: "Hosted tutoring sessions for students, working together on small coding projects.",
    audience: "All students in the school, regardless of prior coding experience.",
    mission: "Fostered a supportive learning environment and shared our knowledge, strengthening our community bonds.",
    images: [
      'images/tutoring_session/the_codes.png',
    ],
    source: 'Created by Yunha Lee (President)'
  },
  {
    name: 'Club Website',
    date: 'JAN - MAY, 2024',
    participants: 'All club members',
    status: 'Completed',
    explanation: "Collaboratively designed, developed, and deployed the official club website.",
    audience: "Club members gained development experience. The public site serves prospective members and the school community.",
    mission: "Gained real-world web development experience and created a meaningful, innovative project for our community.",
    images: [
      'images/website/Screenshot_2025-06-22_at_2.47.19_PM.png',
    ],
    source: 'Screenshot'
  },
];

const Activities2425Page = () => (
  <div className="activities-page">
    <div className="activities-hero">
      <div className="container">
        <h1>2024-2025 Activities</h1>
        <p className="hero-subtitle">See what Coding Club accomplished in 2024-2025!</p>
      </div>
    </div>
    <div className="container">
      <section className="activities-list">
        {activities.map((activity, idx) => (
          <div className="activity-row" key={idx}>
            <div className="activity-info">
              <h2 className="activity-title">
                {activity.name}
                {activity.status && <span className={`activity-status ${activity.status.toLowerCase()}`}>{activity.status}</span>}
              </h2>
              <div className="activity-meta">
                <span><strong>Date:</strong> {activity.date}</span> |{' '}
                <span><strong>Participants:</strong> {activity.participants}</span>
              </div>
              <div className="activity-content">
                <h3>Explanation</h3>
                <p>{activity.explanation}</p>
                <h3>Audience</h3>
                <p>{activity.audience}</p>
                <h3>Mission</h3>
                <p>{activity.mission}</p>
              </div>
            </div>
            <div className="activity-image-container">
              <div className="activity-images">
                {activity.images.map((img, i) => (
                  <img src={img} alt={activity.name + ' ' + (i+1)} key={i} className="activity-img" />
                ))}
              </div>
              {activity.source && <div className="activity-source">Source: {activity.source}</div>}
            </div>
          </div>
        ))}
      </section>
      <footer className="activities-footer">
        <div><strong>Meeting Day:</strong> 5</div>
        <div><strong>Meeting Location:</strong> 407</div>
        <div><strong>Club Supervisor:</strong> Cameron McKenzie</div>
      </footer>
    </div>
  </div>
);

export default Activities2425Page;
