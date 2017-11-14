import React, {Component} from 'react';
import moment from 'moment';
import ListItem from './ListItem'

class SideProject extends Component {
  render() {
    return (<section className="section side-project">
      <h3 className="section--title">Side projects</h3>
      {this.props.sideProject.map(item => <SideProjectItem {...item} key={Math.random(0, 1)}/>)}
    </section>);
  }
}

const SideProjectItem = props => (<div>
  <div className="project--title title-1">{props.title}</div>
  <div className="project--description">
    {props.description}
  </div>
</div>);

export default SideProject;
