import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import Social from "../Social";

const Menu = () => {
	return (
		<div className="menu flex">
			<Link to="/">
				<Logo color="light" />
			</Link>
			<nav>
				<ul>
					<Link to="/">
						<li>Homepage</li>
					</Link>
					<Link to="/rules">
						<li>Entry Rules</li>
					</Link>
					<Link to="/rules">
						<li>Brave.co.uk</li>
					</Link>
					<Link to="/termsAndconditions">
						<li>T'S &amp; C'S</li>
					</Link>
				</ul>
				<Social color="light" />
			</nav>
		</div>
	);
};

export default Menu;
