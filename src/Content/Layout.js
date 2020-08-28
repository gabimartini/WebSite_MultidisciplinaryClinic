import React, { useState } from 'react';
import Menu from '../Component/Menu/Menu'
import SideDrawer from '../Component/Menu/Mobile_Content/SideDrawer/SideDrawer'
import Footer from '../Component/Rodape/Footer'
import './Layout.css'

function Layout(props){
    const [openSideDrawer, setOpenSideDrawer] = useState(false)

    const openSide = () => {
        if(openSideDrawer){
            setOpenSideDrawer(false)
        }else{
            setOpenSideDrawer(true)
        }
    }
    return (
<div className='Main-Content'>
    <Menu openMenu={openSide}  />
   <SideDrawer open={ openSideDrawer}
    closed = {()=>setOpenSideDrawer(false)}
    menuclicked = {openSide}/>
    <main className='Content'>
        {props.children}
    </main>
    <Footer/>
</div>
    )
}

export default Layout;

