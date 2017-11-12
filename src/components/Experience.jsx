import React, {Component} from 'react';
import moment from 'moment';
import ListItem from './ListItem'

class Experience extends Component {
  render() {
    return (
      <div>
        <h3>Experience</h3>
        {this.props.experience.map(item => <ExperienceItem {...item} key={Math.random(0, 1)}/>)}
      </div>
    );
  }
}

const ExperienceItem = props => (
  <div className="job">
    <span className="job--title">{props.jobTitle}</span>
    <span className="job--comany">{props.company}</span>
    {props.link && <span className="job--link"><a href={props.link} target="_blank">{props.link}</a></span>}
    <div>
      <span>{moment(props.startDate.month + ' ' + props.startDate.year, 'MM YYYY').format('MMM YYYY')}</span>
      <span>
        {props.endDate && moment(props.endDate.month + ' ' + props.endDate.year, 'MM YYYY').format('MMM YYYY')}
        {!props.endDate && 'present'}
      </span>
    </div>
    {props.description}
    {props.projects && props.projects.map(item => <Project {...item} key={Math.random(0, 1)}/>)}
  </div>
);

const Project = props => (
  <div>
    {props.title}
    {props.teamSize}
    {props.role}
    {props.description}
    {props.responsibilities && <ul>{props.responsibilities.map(item => <ListItem item={item} key={Math.random(0, 1)}/>)}</ul>}
    {props.environment && <ul>{props.environment.map(item => <ListItem item={item} key={Math.random(0, 1)}/>)}</ul>}
    {props.link && <a href={props.link} target="_blank">{props.link}</a>}
  </div>
);

export default Experience;
