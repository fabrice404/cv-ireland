import React from 'react';

import types from './proptypes';

const Knowledge = ({ knowledge }) => (
  <section className="section knowledge">
    <h3 className="section--title">IT skills & languages</h3>
    <table>
      <tbody>
        {knowledge.map((item) => <KnowledgeItem {...item} key={Math.random(0, 1)} />)}
      </tbody>
    </table>
  </section>
);
Knowledge.propTypes = types.knowledge;

const KnowledgeItem = ({ title, description }) => (
  <tr>
    <td className="text-light">
      {title}
      :
    </td>
    <td>
      {description}
    </td>
  </tr>
);
KnowledgeItem.propTypes = types.KnowledgeItem;

export default Knowledge;
