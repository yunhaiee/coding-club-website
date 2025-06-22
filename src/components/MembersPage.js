import React, { useState } from 'react';
import './MembersPage.css';

const MembersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const members = [
    {
      id: 1,
      name: "Yunha Lee",
      role: "President & Founder",
      year: "Senior",
      email: "leeyh2026@tciscommunity.com",
      avatar: "👩‍💻",
      joined: "2024 August"
    },
    {
      id: 2,
      name: "Minsoo Kwon",
      role: "Vice President",
      year: "Junior",
      email: "kwonms2027@tciscommunity.com",
      avatar: "👨‍💻",
      joined: "2024 August"
    },
    {
      id: 3,
      name: "Max Kim",
      role: "Secretary",
      year: "Senior",
      email: "kimki2028@tciscommunity.com",
      avatar: "👨‍💻",
      joined: "2024 August"
    },
    {
      id: 4,
      name: "Julia Jeong",
      role: "Treasurer",
      year: "Senior",
      email: "jeongah2026@tciscommunity.com",
      avatar: "👩‍💻",
      joined: "2024 August"
    },
    {
      id: 5,
      name: "Daniel Bae",
      role: "Member",
      year: "Senior",
      email: "baedjy2026@tciscommunity.com",
      avatar: "👨‍💻",
      joined: "2024 August"
    },
    {
      id: 6,
      name: "Jun",
      role: "Member",
      year: "Junior",
      email: "jeonjs2027@tciscommunity.com",
      avatar: "👨‍💻",
      joined: "2024 August"
    },
    {
      id: 7,
      name: "Kevin Donggeun Yoo",
      role: "Member",
      year: "Junior",
      email: "yoodg2027@tciscommunity.com",
      avatar: "👨‍💻",
      joined: "2024 August"
    },
    {
      id: 8,
      name: "Caleb",
      role: "Member",
      year: "Sophomore",
      email: "jangc2028@tciscommunity.com",
      avatar: "👨‍💻",
      joined: "2024 August"
    },
    {
      id: 9,
      name: "Kyle Insung Kim",
      role: "Member",
      year: "Sophomore",
      email: "kimki2028@tciscommunity.com",
      avatar: "👨‍💻",
      joined: "2024 August"
    },
    {
      id: 10,
      name: "Gyeong Jun Lee",
      role: "Member",
      year: "Sophomore",
      email: "leegjun2028@tciscommunity.com",
      avatar: "👨‍💻",
      joined: "2024 August"
    },
    {
      id: 11,
      name: "Yaeeun Hwang",
      role: "Member",
      year: "Graduated",
      email: "hwangye2025@tciscommunity.com",
      avatar: "👩‍💻",
      joined: "2024 August"
    },
    {
      id: 12,
      name: "Cameron McKenzie",
      role: "Supervisor",
      year: "Faculty",
      email: "mckenziecm@tcis.or.kr",
      avatar: "👨‍🏫",
      joined: "2024 August"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Members' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'senior', label: 'Seniors' },
    { id: 'junior', label: 'Juniors' },
    { id: 'sophomore', label: 'Sophomores' }
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || 
                         (activeFilter === 'leadership' && ['President & Founder', 'Vice President', 'Secretary', 'Treasurer'].includes(member.role)) ||
                         (activeFilter === 'senior' && member.year === 'Senior') ||
                         (activeFilter === 'junior' && member.year === 'Junior') ||
                         (activeFilter === 'sophomore' && member.year === 'Sophomore');
    
    return matchesSearch && matchesFilter;
  });

  const leadershipMembers = members.filter(member => 
    ['President & Founder', 'Vice President', 'Secretary', 'Treasurer'].includes(member.role)
  );

  return (
    <div className="members-page">
      <div className="members-hero">
        <div className="container">
          <h1>Our Members</h1>
          <p className="hero-subtitle">
            Meet the talented developers, designers, and innovators who make <span className="highlight">Coding Club </span> 
             a vibrant and dynamic community.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Leadership Section */}
        <section className="leadership-section">
          <h2>Leadership Team</h2>
          <div className="leadership-grid">
            {leadershipMembers.map(member => (
              <div key={member.id} className="leadership-card">
                <div className="member-avatar-large">{member.avatar}</div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-email">{member.email}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="search-filter-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search members by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Members Grid */}
        <section className="members-grid">
          {filteredMembers.length > 0 ? (
            filteredMembers.map(member => (
              <div key={member.id} className="member-card">
                <div className="member-header">
                  <div className="member-avatar">{member.avatar}</div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-year">{member.year}</p>
                  </div>
                </div>
                
                <div className="member-stats">
                  <span className="stat">
                    📧 {member.email}
                  </span>
                  <span className="stat">
                    📅 Joined {member.joined}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No members found matching your search criteria.</p>
            </div>
          )}
        </section>

        {/* Stats Section */}
        <section className="members-stats">
          <h2>Community Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">11</div>
              <div className="stat-label">Total Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{members.filter(m => m.year === 'Senior').length}</div>
              <div className="stat-label">Seniors</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{members.filter(m => m.year === 'Junior').length}</div>
              <div className="stat-label">Juniors</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{members.filter(m => m.year === 'Sophomore').length}</div>
              <div className="stat-label">Sophomores</div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="join-cta">
          <div className="cta-content">
            <h2>Want to Join Our Community?</h2>
            <p>Become part of our growing community of developers and innovators. Connect, learn, and build amazing things together!</p>
            <button className="btn btn-primary btn-large">Apply to Join</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MembersPage;
