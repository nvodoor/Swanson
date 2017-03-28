import React from 'react';

const ListItem = (props) => (
  <div>
  	<li key={props.item.id}>
    <a href ={'https://www.google.com/#q=' + props.item.description}> { props.item.description } </a>
    </li>
  </div>
)

export default ListItem;