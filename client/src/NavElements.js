import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    background: rgb(255, 255, 255);
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding:0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    
    width: 100%;
`

export const NavLinks = styled(NavLink)`
    color: rgb(172, 228, 186);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    padding-right: 10px;
    height: 100%
    cursor: pointer;
    font-size: 24px;
    &.active {
        color: #000;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`