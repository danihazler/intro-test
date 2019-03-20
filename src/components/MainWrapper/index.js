import React from "react";

import Header from "../Header";
import HeaderMobile from "../HeaderMobile";

const MainWrapper = props => {
	return (
		<div className="flex jc-end">
			<HeaderMobile
				click={props.mobileMenuClick}
				isMobileMenuOpen={props.isMobileMenuOpen}
			/>
			<Header />
			{props.children}
		</div>
	);
};

export default MainWrapper;
