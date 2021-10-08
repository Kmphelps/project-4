import { Nav, NavLinks, NavMenu } from './NavElements'

function Navbar() {
  return (
    <Nav className="navbar">
        <NavMenu className="menu">
            <NavLinks style={{color: "#EF869C", fontWeight: "bold" }} to="/" className="link">
            Household Chore Delegator
            </NavLinks>
            
        </NavMenu>
    </Nav>
  )
}

export default Navbar;
