
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import {Link} from 'react-router-dom';
import { FaMagento} from 'react-icons/fa';

export const Nav = styled.nav`
background: #101522;
height: 88px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 88px;

${Container}
`;
export const NavLogo  = styled(Link)`
color : #fff;
cursor : pointer;
justify-self : flex-start;
font-size: 2rem ; 
text-decoration : none;
display : flex;
align-items: center;
`;


export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem`;

export const MobileIcon = styled.div`

display : none ; 

@media screen and (max-width : 960px) {
    display : block;
    position : absolute ; 
    top : 0 ; 
    right : 0 ;
    transform : translate(-100% , 60%);
    font-size : 1.8rem ;
    cursor : pointer ;
}
`;