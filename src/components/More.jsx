import React, {Component} from 'react';
import moment from 'moment';
import ListItem from './ListItem'

class More extends Component {
  render() {
    return (
      <section className="section more">
        <h3 className="section--title">More</h3>
        {this.props.more.map(item => <MoreItem {...item} key={Math.random(0, 1)}/>)}
      </section>
    );
  }
}

const MoreItem = props => (
  <div>
    <span class="text-light">{props.title}: </span>
    {props.description}
  </div>
);

export default More;
