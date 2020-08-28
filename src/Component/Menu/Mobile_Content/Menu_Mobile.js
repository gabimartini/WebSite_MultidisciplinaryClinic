import React from 'react';
import MenuItem from '../Menu_Item';
import '../Menu.scss'

const MenuMobile = () => (

  <div className= 'Mobile'>
    <MenuItem link="/" exact>Home</MenuItem>
    <MenuItem link="/Sobre">Sobre Nós</MenuItem>
    <MenuItem link="/Contato">Contato</MenuItem>
  </div>

);

export default MenuMobile;
