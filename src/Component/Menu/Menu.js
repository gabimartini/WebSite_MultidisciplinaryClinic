import React from 'react';
import Menuitems from './Menu_Items';
import DrawerToggle from './Mobile_Content/SideDrawer/DrawerToggle/DrawerToggle'
import './Menu.scss'

function Menu (props){
    return(
   
    <div className='Main_Menu'>
    <DrawerToggle clicked={props.openMenu }/>
    <div className = 'Desktop'>
    <Menuitems/>  
    </div>

    </div>
    
    
    );
}
 

export default Menu;