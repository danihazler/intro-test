import React from "react";

import Menu from "./Menu";
import Hamburger from "./Hamburger";
import "./HeaderMobile.css";

const HeaderMobile = props => {
	let mobileMenu;

	if (props.isMobileMenuOpen) {
		mobileMenu = <Menu />;
	}

	return (
		<header className="mobile flex f-col jc-start">
			<Hamburger
				click={props.click}
				isMobileMenuOpen={props.isMobileMenuOpen}
			/>
			{mobileMenu}
		</header>
	);
};

export default HeaderMobile;
