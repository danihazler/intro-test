import React from "react";
import { Link } from "react-router-dom";

import Social from "../Social";
import Logo from "../Logo";
import Twist from "./Twist";

// import Nav from "../Nav";

import "./Header.css";
import "./HeaderQueries.css";

const Header = () => {
	return (
		<header className="desktop flex f-col jc-start">
			<Link to="/">
				<Logo color="dark" />
			</Link>
			<Twist color="dark" />
			<Social color="dark" />
			<nav>
				<ul className="flex">
					<Link to="/rules">
						<li>Rules of Entry</li>
					</Link>

					<li id="line" className="bg-black" />

					<Link to="/termsAndconditions">
						<li>Terms &amp; Conditions</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
