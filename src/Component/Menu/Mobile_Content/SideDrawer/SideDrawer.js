import React from 'react';
import MenuItems from '../Menu_Mobile';
import './SideDrawer.scss';
import Backdrop from '../Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer Close']
  if (props.open) {
  attachedClasses = ['SideDrawer Open']

  }
  return (
    <div >
      <Backdrop show={props.open} clicked={props.closed} />
    <div className={attachedClasses}>
        <nav onClick={props.menuclicked}>
          <MenuItems />
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;
