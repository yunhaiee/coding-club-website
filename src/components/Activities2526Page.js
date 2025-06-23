import React from 'react';
import './ActivitiesPage.css';

const activities = [
  {
    name: 'MCP Seminar',
    date: 'AUG 2025',
    participants: 'Club President',
    status: 'Planned',
    explanation: "Will host a seminar on the Model Context Protocol (MCP) to explore its architecture and real-world applications.",
    audience: "All school community members",
    mission: "Stay ahead of tech trends by empowering community with cutting-edge AI utilization skills.",
    images: [
      'images/mcp seminar/mcp-feature-image.jpg',
    ],
    source: {
      text: 'Model Context Protocol, SHIFT ASIA',
      url: 'https://shiftasia.com/community/model-context-protocol/'
    }
  },
  {
    name: 'Science Competition Seminar',
    date: 'SEP 2025',
    participants: 'Club Officers',
    status: 'Planned',
    explanation: "Will hold a seminar to prepare members for the Science Fairs, covering project ideas and research methods.",
    audience: "All school community members interested in developing a competitive project for a science fair.",
    mission: "Foster a culture of innovation and excellence by informing students about competitions",
    images: [
      'images/science festival seminar/Opening-Ceremony.jpg'
    ],
    source: {
      text: 'ISEF Partnership, Society for Science',
      url: 'https://www.societyforscience.org/isefpartnership/'
    }
  },
  {
    name: 'HS Club SW Competition',
    date: 'JUL - NOV, 2025',
    participants: 'Club members + other club members',
    status: 'Planned',
    explanation: 'Our club will collaborate with other clubs to develop innovative software solutions that address real-world problems.',
    audience: 'This competition is for our members and students from other participating clubs who want to apply their skills in a competitive environment.',
    mission: 'This experience will reinforce our values of innovation and teamwork while challenging members to think creatively.',
    images: [
      'images/club sw competition/poster.png'
    ],
    source: {
      text: 'High School SW Contest',
      url: 'https://www.highschool-swcontest.net/?pgid=l1ebz2d8-78ee8f5b-62da-4956-a6d7-264f16324835'
    }
  },
];

const Activities2526Page = () => (
  <div className="activities-page">
    <div className="activities-hero">
      <div className="container">
        <h1>2025-2026 Activities</h1>
        <p className="hero-subtitle">See what Coding Club accomplished in 2025-2026!</p>
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
              {activity.source && (
                <div className="activity-source">
                  Source: {typeof activity.source === 'string' ? activity.source : (
                    <a href={activity.source.url} target="_blank" rel="noopener noreferrer">
                      {activity.source.text}
                    </a>
                  )}
                </div>
              )}
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

export default Activities2526Page;
