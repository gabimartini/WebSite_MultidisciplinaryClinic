import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss'

const MenuItem = (props) => (
  <li className='Menu_Item'>
    <NavLink
      to={{
        pathname: props.link,
        state: { type: props.children },
      }}
      exact={props.exact}
   >
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
