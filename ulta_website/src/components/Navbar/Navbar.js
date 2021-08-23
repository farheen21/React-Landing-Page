
import React , {useState} from 'react';
import {  FaBars , FaTimes } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import { Nav , NavbarContainer , NavLogo , NavIcon , MobileIcon ,NavMenu , NavItem , NavLinks ,NavItemBtn , NavBtnLink} from './NavbarElements';


const Navbar = () => {

   const [click , setClick] = useState(false)
   const [button , setButton] = useState(true);

   const handleClicked = () => setClick(!click);
   const showButton = () => {
       if(window.innerwidth <= 960) {
        setButton(false);
       }
       else {
         setButton(true);
       }
   }
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
         <NavMenu onClick={handleClicked} click={click}>
          
           <NavItem>
             <NavLinks to="/">Home</NavLinks>
           </NavItem>
         
           <NavItem>
             <NavLinks to="/services">Services</NavLinks>
           </NavItem>
         
           <NavItem>
             <NavLinks to="/products">Products</NavLinks>
           </NavItem>
           <NavItemBtn>
             {button ? (
               <NavBtnLink to="/sign-up">
                 <Button primary>SIGN UP</Button>
               </NavBtnLink>
             ) : (
               <NavBtnLink to="/sign-up">
                 <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
               </NavBtnLink>
             )}
           </NavItemBtn>
         </NavMenu>
       </NavbarContainer>
       </Nav>
       </IconContext.Provider>
       </>
    )
}

export default Navbar;