import { faEnvelopeOpen } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nl2br from 'react-newline-to-break';
import React from 'react';

import Education from './Education';
import Experience from './Experience';
import Knowledge from './Knowledge';
import SideProject from './SideProject';
import types from './proptypes';

const App = ({
  firstName,
  lastName,
  jobTitle,
  phone,
  email,
  github,
  summary,
  experience,
  education,
  sideProject,
  knowledge,
}) => (
  <div>
    <header className="me">
      <h1 className="me--name">
        {firstName}
        <span className="me--lastname">{lastName}</span>
      </h1>
      <h2 className="me--jobTitle">{jobTitle}</h2>
      <div className="me--contact">
        <span>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          {email}
        </span>
        <span>
          <FontAwesomeIcon icon={faWhatsapp} />
          {phone}
        </span>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {github}
        </span>
      </div>
    </header>
    <section className="section summary">
      <h3 className="section--title">Summary</h3>
      {nl2br(summary)}
    </section>
    <Experience experience={experience} />
    <Education education={education} />
    <SideProject sideProject={sideProject} />
    <Knowledge knowledge={knowledge} />
    <section className="section reference">
      <h3 className="section--title">Reference</h3>
        Available on request
    </section>
  </div>
);
App.propTypes = types.cv;

export default App;
