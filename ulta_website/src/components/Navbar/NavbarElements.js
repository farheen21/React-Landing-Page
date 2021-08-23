
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import {Link} from 'react-router-dom';
import { FaMagneto} from 'react-icons/fa';

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
align-items: center;
`;


export const NavIcon = styled(FaMagneto)`
margin-right: 0.5rem`;