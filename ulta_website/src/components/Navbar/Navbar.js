
import React , {useState} from 'react';
import {  FaBars , FaTimes } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Nav , NavbarContainer , NavLogo , NavIcon , MobileIcon} from './NavbarElements';


const Navbar = () => {

   const [click , setClick] = useState(false)

   const handleClicked = () => setClick(!click);
    return (
       <>
       <IconContext.Provider value= {{color : '#fff'}}>
       <Nav>
       <NavbarContainer>
         <NavLogo  to="/">
           <NavIcon />
               ULTRA
         </NavLogo>
         <MobileIcon onClick={handleClicked} >
           {click ?  <FaTimes /> : <FaBars />}
         </MobileIcon>
         <NavMenu onClick={handleClicked} >
           <NavItem>Home</NavItem>
         </NavMenu>
       </NavbarContainer>
       </Nav>
       </IconContext.Provider>
       </>
    )
}

export default Navbar;