import { Nav, NavLinks, NavMenu } from './NavElements'
import { BrowserRouter } from "react-router-dom";

function Navbar() {
  return (
      <BrowserRouter>
    <Nav className="navbar">
        
        <NavMenu className="menu">
            <h1>Chore Delegator</h1>
            <NavLinks to="/" className="link">
            Home
            </NavLinks>
    
        </NavMenu>
    </Nav>
    </BrowserRouter>
  )
}

export default Navbar;
