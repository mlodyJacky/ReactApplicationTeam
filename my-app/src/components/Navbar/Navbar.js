// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
                <NavLink to="/home" activeStyle>
						HOME
					</NavLink>
					<NavLink to="/galeria" activeStyle>
						GALERIA
					</NavLink>
					<NavLink to="/krzywa" activeStyle>
						KRZYWA
					</NavLink>
					<NavLink to="/komputery" activeStyle>
						KOMPUTERY
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;