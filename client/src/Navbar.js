import { Nav, NavLinks, NavMenu } from './NavElements'
import broom from './broom.png';

function Navbar() {
  return (
    <Nav className="navbar">
        <NavMenu className="menu">
            <NavLinks style={{color: "#ef869c", fontWeight: "bold" }} to="/" className="link">
            Keeping it Clean <img src={broom} alt="broom"/> Household Chore Delegation App 
            </NavLinks>
            
        </NavMenu>
    </Nav>
  )
}

export default Navbar;
