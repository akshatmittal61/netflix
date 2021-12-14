import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import Button from "./Button";

const Header = ({ transparent = false }) => {
	return (
		<header
			className="header"
			style={{
				backgroundColor: transparent ? "transparent" : "var(--tcolor)",
			}}
		>
			<div className="header-left">
				<div className="header-logo">
					<Link to="/">
						<img
							className="header-logo__img"
							src={logo}
							alt="Netflix"
						/>
					</Link>
				</div>
			</div>
			<div className="header-right">
				<div className="header-right-link">
					<Button
						text="Join Netflix"
						variant="transparent"
						color="light"
						containsLink
						link="/signup"
						size="small"
					/>
				</div>
				<div className="header-right-link">
					<Button
						text="Sign In"
						containsLink
						link="/login"
						size="small"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
