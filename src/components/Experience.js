import React, { useState } from 'react';
import { data } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

export default function Experience() {
  const [ref, visible] = useScrollReveal();
  const [active, setActive] = useState(0);
  const exp = data.experience[active];

  return (
    <section id="experience" className="section" ref={ref}>
      <div className={`section__inner ${visible ? 'reveal' : ''}`}>
        <div className="section__label">
          <span className="section__label-num">02.</span>
          <span>Experience</span>
          <div className="section__label-line" />
        </div>

        <h2 className="section__heading">Where I've <span className="text-amber">Worked</span></h2>

        <div className="exp__layout">
          {/* Tabs */}
          <div className="exp__tabs">
            {data.experience.map((e, i) => (
              <button
                key={i}
                className={`exp__tab ${active === i ? 'exp__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="exp__tab-company">{e.company}</span>
                <span className="exp__tab-role">{e.role}</span>
                {e.current && <span className="exp__tab-badge">Current</span>}
              </button>
            ))}

            <div className="exp__timeline">
              <div className="exp__timeline-line" />
            </div>
          </div>

          {/* Content */}
          <div className="exp__content" key={active}>
            <div className="exp__header">
              <div>
                <h3 className="exp__role">{exp.role}</h3>
                <p className="exp__company">
                  @ {exp.company}
                  <span className="exp__client"> (Client: {exp.client})</span>
                </p>
              </div>
              <div className="exp__meta">
                <span className="exp__period">{exp.period}</span>
                <span className="exp__location">{exp.location}</span>
              </div>
            </div>

            <ul className="exp__bullets">
              {exp.bullets.map((b, i) => (
                <li key={i} className="exp__bullet">
                  <span className="exp__bullet-icon">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="exp__metrics">
              {exp.metrics.map(m => (
                <div key={m.label} className="exp__metric">
                  <span className="exp__metric-value">{m.value}</span>
                  <span className="exp__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
