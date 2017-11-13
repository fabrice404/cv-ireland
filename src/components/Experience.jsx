import React, {Component} from 'react';
import moment from 'moment';
import ListItem from './ListItem'

class Experience extends Component {
  render() {
    return (
      <section className="section experience">
        <h3 class="section--title">Experience</h3>
        {this.props.experience.map(item => <ExperienceItem {...item} key={Math.random(0, 1)}/>)}
      </section>
    );
  }
}

const ExperienceItem = props => (
  <div>
    <span className="title-1">{props.jobTitle}</span>
    <span className="title-2 company">{props.company}</span>

    <span className="date">
      <span className="date-start">{moment(props.startDate.month + ' ' + props.startDate.year, 'MM YYYY').format('MMM YYYY')}</span>
      <span className="date-end">
        {props.endDate && moment(props.endDate.month + ' ' + props.endDate.year, 'MM YYYY').format('MMM YYYY')}
        {!props.endDate && 'present'}
      </span>
    </span>

    {props.link && <span className="link">
      <a href={props.link} target="_blank">{props.link}</a>
    </span>}

    {props.description&& <div>{props.description}</div>}
    {props.projects && props.projects.map(item => <Project {...item} key={Math.random(0, 1)}/>)}
  </div>
);

const Project = props => (
  <div className="project">
    {props.title && <div className="title">Project: {props.title}</div>}
    {props.teamSize && <div className="title">Team size: {props.teamSize}</div>}
    {props.role && <div className="title">Role: {props.role}</div>}
    {props.description}
    {props.responsibilities && <ul>{props.responsibilities.map(item => <ListItem item={item} key={Math.random(0, 1)}/>)}</ul>}
    {props.environment && <ul>{props.environment.map(item => <ListItem item={item} key={Math.random(0, 1)}/>)}</ul>}
    {props.link && <a href={props.link} target="_blank">{props.link}</a>}
  </div>
);

export default Experience;
