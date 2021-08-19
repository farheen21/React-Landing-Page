
import styled from 'styled-components' ;
import {Link as LinkR} from 'rect-router-dom';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
background: #000;
height: 80px;
margin-top: -80px;
display: flex;
justify-content : center;
font-size: 1rem;
position : sticky;
top: 0 ;
z-index: 10;

@media screen and (max-width :960px) {
    transition: 0.8sec all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: center;
height: 80px;
z-index: 1;
width: 100%;
padding: 0  24px;
max-width: 1100px ;
`

export const Navlogo = styled{LinkR}`
color: #fff;
justify-self: flex-start;



`