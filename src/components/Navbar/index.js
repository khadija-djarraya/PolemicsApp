import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {  {/* shows the different components in the navigation bar */}
    return (
        <>

           <Nav>
            <NavLogo to="/"> 
                Polemics
            </NavLogo>  
            <Bars />

            <NavMenu>
                {/* <NavLink to="/" activeStyle>
                    Home
                </NavLink> */}
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/politics" activeStyle>
                    Politics
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>                
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;