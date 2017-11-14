import React, {Component} from 'react';
import moment from 'moment';
import ListItem from './ListItem'

class Experience extends Component {
  render() {
    return (
      <section className="section experience">
        <h3 className="section--title">Experience</h3>
        {this.props.experience.map(item => <ExperienceItem {...item} key={Math.random(0, 1)}/>)}
      </section>
    );
  }
}

const ExperienceItem = props => (
  <div className="job">
    <span className="job--title title-1">{props.jobTitle}</span>
    <span className="job--company title-2">{props.company}</span>

    <span className="job--date date">
      <span className="job--dateStart dateStart">{moment(props.startDate.month + ' ' + props.startDate.year, 'MM YYYY').format('MMM YYYY')}</span>
      <span className="job--dateEnd dateEnd">
        {props.endDate && moment(props.endDate.month + ' ' + props.endDate.year, 'MM YYYY').format('MMM YYYY')}
        {!props.endDate && 'present'}
      </span>
    </span>

    {props.link && <span className="job--link">
      <a href={props.link} target="_blank">{props.link}</a>
    </span>}

    {props.description && <div>{props.description}</div>}
    {props.projects && props.projects.map(item => <Project {...item} key={Math.random(0, 1)}/>)}
  </div>
);

const Project = props => (
  <div className="job--project">
    {props.title && <div><span className="text-light">Project:</span>{props.title}</div>}
    {props.description && <div>{props.description}</div>}
    {props.teamSize && <div><span className="text-light">Team size:</span>{props.teamSize}</div>}
    {props.role && <div><span className="text-light">Role:</span>{props.role}</div>}
    {props.responsibilities && <div><span className="text-light">Responsibility:</span><ul>{props.responsibilities.map(item => <ListItem item={item} key={Math.random(0, 1)}/>)}</ul></div>}
    {props.environment && <div><span className="text-light">Environment:</span><ul>{props.environment.map(item => <ListItem item={item} key={Math.random(0, 1)}/>)}</ul></div>}
    {props.link && <div><a href={props.link} target="_blank">{props.link}</a></div>}
  </div>
);

export default Experience;
