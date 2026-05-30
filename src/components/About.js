import React from 'react';
import { data } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const highlights = [
  { icon: '⚙️', label: 'BOF & Conarc Systems' },
  { icon: '📊', label: 'Real-time Dashboards' },
  { icon: '🔐', label: 'Auth & Role-Based Access' },
  { icon: '🗄️', label: 'Oracle SQL Optimization' },
];

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="about section" ref={ref}>
      <div className={`about__inner ${visible ? 'reveal' : ''}`}>
        <div className="section__label">
          <span className="section__label-num">01.</span>
          <span>About Me</span>
          <div className="section__label-line" />
        </div>

        <div className="about__grid">
          <div className="about__text">
            <h2 className="section__heading">Building systems where<br /><span className="text-amber">failure is not an option.</span></h2>
            <p>
              I'm a full-stack developer based in Jamshedpur, working at the intersection of software engineering and industrial automation. My code runs in steel plants — real-time, every day, on systems that can't go down.
            </p>
            <p>
              At Tata Steel's Automation Division, I've built everything from live process-monitoring dashboards for furnace operators to centralized authentication systems managing access across the entire Level-2 network. I work in environments where a slow query or a memory leak doesn't just annoy users — it halts production.
            </p>
            <p>
              My stack is ASP.NET Core + React.js + Oracle SQL, but what I actually specialize in is translating complex industrial requirements into precise, performant software.
            </p>

            <div className="about__highlights">
              {highlights.map(h => (
                <div key={h.label} className="about__highlight">
                  <span className="about__highlight-icon">{h.icon}</span>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__card-col">
            <div className="about__card">
              <div className="about__card-header">
                <div className="about__card-dots">
                  <span /><span /><span />
                </div>
                <span className="about__card-title">developer.profile</span>
              </div>
              <div className="about__card-body">
                <div className="about__code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-var"> developer</span>
                  <span className="code-punct"> = &#123;</span>
                </div>
                <div className="about__code-line indent">
                  <span className="code-prop">name</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">"Kunver Sudhanshu"</span><span className="code-punct">,</span>
                </div>
                <div className="about__code-line indent">
                  <span className="code-prop">role</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">".NET Full-Stack Dev"</span><span className="code-punct">,</span>
                </div>
                <div className="about__code-line indent">
                  <span className="code-prop">location</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">"Jamshedpur, IN"</span><span className="code-punct">,</span>
                </div>
                <div className="about__code-line indent">
                  <span className="code-prop">experience</span>
                  <span className="code-punct">: </span>
                  <span className="code-num">3</span><span className="code-punct">,</span>
                </div>
                <div className="about__code-line indent">
                  <span className="code-prop">domain</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">"Industrial Automation"</span><span className="code-punct">,</span>
                </div>
                <div className="about__code-line indent">
                  <span className="code-prop">availability</span>
                  <span className="code-punct">: </span>
                  <span className="code-bool">true</span>
                </div>
                <div className="about__code-line">
                  <span className="code-punct">&#125;</span>
                </div>
              </div>
            </div>

            <div className="about__edu">
              <h3 className="about__edu-title">Education</h3>
              {data.education.map(e => (
                <div key={e.degree} className="about__edu-item">
                  <div className="about__edu-degree">{e.degree}</div>
                  <div className="about__edu-school">{e.school}</div>
                  <div className="about__edu-period">{e.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
