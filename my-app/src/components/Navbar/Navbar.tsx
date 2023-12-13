// Filename - "./components/Navbar.tsx

import React, { FC } from "react";
import '../../style/NavbarElements.css';

const Navbar: FC = () => {
	return (
		<>
			<div className="Nav">
				<div className="NavMenu">
					<a href="/home" >
							HOME
					</a>
					<a href="/galeria">
						GALERIA
					</a>
					<a href="/krzywa" >
						KRZYWA
					</a>
					<a href="/komputery">
						KOMPUTERY
					</a>
				</div>
			</div>
		</>
	);
};

export default Navbar;