import moment from 'moment';
import React from 'react';

import ListItem from './ListItem';
import types from './proptypes';

const Experience = ({ experience }) => (
  <section className="section experience">
    <h3 className="section--title">Experience</h3>
    {experience.map((item) => <ExperienceItem {...item} key={Math.random(0, 1)} />)}
  </section>
);
Experience.propTypes = types.experience;

const ExperienceItem = ({
  jobTitle,
  company,
  startDate,
  endDate,
  link,
  description,
  projects,
}) => (
  <div className="job">
    <span className="job--title title-1">{jobTitle}</span>
    <span className="job--company title-2">{company}</span>

    <span className="job--date date">
      <span className="job--dateStart dateStart">{moment(`${startDate.month} ${startDate.year}`, 'MM YYYY').format('MMM YYYY')}</span>
      <span className="job--dateEnd dateEnd">
        {endDate && moment(`${endDate.month} ${endDate.year}`, 'MM YYYY').format('MMM YYYY')}
        {!endDate && 'present'}
      </span>
    </span>

    {link && (
    <span className="job--link">
      <a href={link} target="_blank" rel="noreferrer noopener">{link}</a>
    </span>
    )}

    {description && <div>{description}</div>}
    {projects && projects.map((item) => <Project {...item} key={Math.random(0, 1)} />)}
  </div>
);
ExperienceItem.propTypes = types.experienceItem;

const Project = ({
  title,
  description,
  teamSize,
  role,
  responsibilities,
  environment,
  link,
}) => (
  <div className="job--project">
    {title && (
    <div>
      <span className="text-light">Project:</span>
      {title}
    </div>
    )}
    {description && <div>{description}</div>}
    {teamSize && (
    <div>
      <span className="text-light">Team size:</span>
      {teamSize}
    </div>
    )}
    {role && (
    <div>
      <span className="text-light">Role:</span>
      {role}
    </div>
    )}
    {responsibilities && (
    <div>
      <span className="text-light">Responsibility:</span>
      <ul>{responsibilities.map((item) => <ListItem item={item} key={Math.random(0, 1)} />)}</ul>
    </div>
    )}
    {environment && (
    <div>
      <span className="text-light">Environment:</span>
      <ul>{environment.map((item) => <ListItem item={item} key={Math.random(0, 1)} />)}</ul>
    </div>
    )}
    {link && <div><a href={link} target="_blank" rel="noreferrer noopener">{link}</a></div>}
  </div>
);
Project.propTypes = types.project;

export default Experience;
