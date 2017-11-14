import React, {Component} from 'react';
import moment from 'moment';
import ListItem from './ListItem'

class Education extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="section education">
        <h3 className="section--title">Education</h3>
        {this.props.education.map(item => <EducationItem {...item} key={Math.random(0, 1)}/>)}
      </section>
    );
  }
}

const EducationItem = props => (
  <div className="training">
    <span className="training--title title-1">{props.title}</span>
    <span className="training--date date">
      {props.year}
    </span>
    <div className="training--description">
      <ul>
        {props.description.map(item => <ListItem item={item} key={Math.random(0, 1)}/>)}
      </ul>
    </div>
  </div>
);

export default Education;
