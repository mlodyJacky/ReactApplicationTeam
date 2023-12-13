// Filename - "./components/Navbar.tsx

import React, { FC } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar: FC = () => {
	return (
		<>
			<Nav>
				<NavMenu>
                <NavLink to="/home" >
						HOME
					</NavLink>
					<NavLink to="/galeria">
						GALERIA
					</NavLink>
					<NavLink to="/krzywa" >
						KRZYWA
					</NavLink>
					<NavLink to="/komputery">
						KOMPUTERY
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;