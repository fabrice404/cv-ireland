import React from 'react';

import types from './proptypes';

const ListItem = ({ item }) => (
  <li>{item}</li>
);
ListItem.propTypes = types.ListItem;

export default ListItem;
