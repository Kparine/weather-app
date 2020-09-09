import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<div className="header-container">
			<div className="header-content">
				Wx Go
				<FontAwesomeIcon id="wx-icon" size="lg" icon={faGlobeAmericas} />
			</div>
		</div>
	);
};

export default Header;
