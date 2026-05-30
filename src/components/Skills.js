import React from 'react';
import { data } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const categoryIcons = {
  "Languages": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  "Frameworks & Libraries": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  "Databases & Tools": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  "Principles": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
};

const skillLevels = {
  "C#": 90, "ASP.NET Core (MVC, WebAPI)": 88, "Oracle SQL": 85, "React.js": 82,
  "SQL Server": 80, "Entity Framework": 78, "JavaScript": 78, "Python": 65,
  "ADO.NET": 82, "Git": 85, "SOLID Principles": 80, "RESTful API Design": 87,
};

export default function Skills() {
  const [ref, visible] = useScrollReveal();

  const achievements = data.achievements;
  const certs = data.certifications;

  return (
    <section id="skills" className="section" ref={ref}>
      <div className={`section__inner ${visible ? 'reveal' : ''}`}>
        <div className="section__label">
          <span className="section__label-num">04.</span>
          <span>Skills</span>
          <div className="section__label-line" />
        </div>

        <h2 className="section__heading">My <span className="text-amber">Toolbox</span></h2>

        <div className="skills__grid">
          {Object.entries(data.skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <div className="skill-category__header">
                <span className="skill-category__icon">{categoryIcons[category]}</span>
                <h3 className="skill-category__name">{category}</h3>
              </div>
              <div className="skill-category__items">
                {items.map(skill => (
                  <div key={skill} className="skill-item">
                    <div className="skill-item__top">
                      <span className="skill-item__name">{skill}</span>
                      {skillLevels[skill] && (
                        <span className="skill-item__pct">{skillLevels[skill]}%</span>
                      )}
                    </div>
                    {skillLevels[skill] && (
                      <div className="skill-item__bar">
                        <div
                          className="skill-item__fill"
                          style={{ width: visible ? `${skillLevels[skill]}%` : '0%' }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Certs */}
        <div className="skills__extra">
          <div className="skills__extra-card">
            <h3 className="skills__extra-title">
              <span>🏆</span> Achievements
            </h3>
            <ul className="skills__extra-list">
              {achievements.map((a, i) => (
                <li key={i}>
                  <span className="exp__bullet-icon">▹</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills__extra-card">
            <h3 className="skills__extra-title">
              <span>📜</span> Certifications
            </h3>
            <ul className="skills__extra-list">
              {certs.map((c, i) => (
                <li key={i}>
                  <span className="exp__bullet-icon">▹</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
