import { Nav, NavLinks, NavMenu } from './NavElements'

function Navbar() {
  return (
    <Nav className="navbar">
        
        <NavMenu className="menu">
            <h1>Chore Delegator</h1>
            <NavLinks to="/" className="link">
            Home
            </NavLinks>
    
        </NavMenu>
    </Nav>
  )
}

export default Navbar;
