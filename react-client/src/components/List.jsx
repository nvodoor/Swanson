import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Top Random Quotes </h4>
    These are { props.items.length } random quotes.
    { props.items.map (item => <ListItem item={item} />)}
  </div>
)

export default List;