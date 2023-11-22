// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
                <NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/krzywa" activeStyle>
						About
					</NavLink>
					<NavLink to="/galeria" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/komputery" activeStyle>
						Sign Up
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;