import React from 'react';

import ListItem from './ListItem';
import types from './proptypes';

const Education = ({ education }) => (
  <section className="section education">
    <h3 className="section--title">Education</h3>
    {education.map((item) => <EducationItem {...item} key={Math.random(0, 1)} />)}
  </section>
);
Education.propTypes = types.education;

const EducationItem = ({ title, year, description }) => (
  <div className="training">
    <span className="training--title title-1">{title}</span>
    <span className="training--date date">
      {year}
    </span>
    <div className="training--description">
      <ul>
        {description.map((item) => <ListItem item={item} key={Math.random(0, 1)} />)}
      </ul>
    </div>
  </div>
);
EducationItem.propTypes = types.educationItem;

export default Education;
