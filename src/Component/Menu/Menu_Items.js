import React from 'react';
import MenuItem from './Menu_Item';
import './Menu.scss'

const Menuitems = (props) => (

  <div className='Main_Items'>
    <li className='Dropbtn'>
      {props.children}
    </li>
     <div className='Desktop_Menu' >
      <MenuItem link="/" exact>Home</MenuItem>
      <MenuItem link="/Sobre">Sobre Nós</MenuItem>
      <MenuItem link="/Contato">Contato</MenuItem>
    </div>
  </div>

);

export default Menuitems;