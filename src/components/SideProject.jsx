import React from 'react';

import types from './proptypes';

const SideProject = ({ sideProject }) => (
  <section className="section side-project">
    <h3 className="section--title">Side projects</h3>
    {sideProject.map((item) => <SideProjectItem {...item} key={Math.random(0, 1)} />)}
  </section>
);
SideProject.propTypes = types.sideProject;

const SideProjectItem = ({ title, description }) => (
  <div>
    <div className="project--title title-1">{title}</div>
    <div className="project--description">
      {description}
    </div>
  </div>
);
SideProjectItem.propTypes = types.sideProjectItem;

export default SideProject;
