import React from "react";

const Hamburger = props => {
	const styles = {
		line1: {
			transform: props.isMobileMenuOpen
				? "translate(5px, -3px) rotate(45deg)"
				: "none",
			backgroundColor: props.isMobileMenuOpen ? "#f2ecde" : "black"
		},
		line2: {
			opacity: props.isMobileMenuOpen ? 0 : 1,
			transform: props.isMobileMenuOpen ? "translateX(-16px)" : "none"
		},
		line3: {
			transform: props.isMobileMenuOpen
				? "translate(3px, 2px) rotate(-45deg)"
				: "none",
			backgroundColor: props.isMobileMenuOpen ? "#f2ecde" : "black"
		}
	};

	return (
		<div className="hamburger flex f-col" onClick={props.click}>
			<span className="line line1" style={{ ...styles.line1 }} />
			<span className="line line2" style={{ ...styles.line2 }} />
			<span className="line line3" style={{ ...styles.line3 }} />
		</div>
	);
};

export default Hamburger;
