import React, {Component} from 'react';
import moment from 'moment';
import ListItem from './ListItem'

class Knowledge extends Component {
  render() {
    return (<section className="section knowledge">
      <h3 className="section--title">Knowledge</h3>
      <table>{this.props.knowledge.map(item => <KnowledgeItem {...item} key={Math.random(0, 1)}/>)}</table>
    </section>);
  }
}

const KnowledgeItem = props => (<tr>
  <td class="text-light">{props.title}:
  </td>
  <td>
    {props.description}
  </td>
</tr>);

export default Knowledge;
