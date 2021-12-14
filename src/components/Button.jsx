import React from "react";
import { Link } from "react-router-dom";

const Button = ({
	className,
	text = "Click Here",
	variant = "fill",
	size,
	color = "primary",
	onClick,
	type,
	haveIcon = false,
	iconPos = "right",
	icon = "edit",
	style,
	containsLink = false,
	link = "",
}) => {
	let classes = "btn";
	if (
		variant === "fill" ||
		variant === "outline" ||
		variant === "transparent"
	) {
		classes += ` btn-${variant}`;
		if (
			color === "light" ||
			color === "dark" ||
			color === "red" ||
			color === "blue" ||
			color === "green" ||
			color === "primary" ||
			color === "yellow"
		) {
			classes += `-${color}`;
		}
	} else {
		if (
			color === "light" ||
			color === "dark" ||
			color === "red" ||
			color === "blue" ||
			color === "green" ||
			color === "primary" ||
			color === "yellow"
		) {
			classes += ` btn-${color}`;
		}
	}
	if (size === "small") {
		classes += " btn-sm";
	}
	if (size === "large") {
		classes += " btn-lg";
	}
	if (haveIcon) {
		classes += ` btn-have-icon btn-have-icon-${iconPos}`;
	}
	return (
		<>
			{!containsLink ? (
				<button
					className={`${classes} ${className}`}
					onClick={onClick}
					type={type}
					style={style}
				>
					{haveIcon ? (
						iconPos === "left" ? (
							<>
								<span className="material-icons">{icon}</span>
								{text}
							</>
						) : (
							<>
								{text}
								<span className="material-icons">{icon}</span>
							</>
						)
					) : (
						text
					)}
				</button>
			) : (
				<Link to={link}>
					<button
						className={`${classes} ${className}`}
						onClick={onClick}
						type={type}
						style={style}
					>
						{haveIcon ? (
							iconPos === "left" ? (
								<>
									<span className="material-icons">
										{icon}
									</span>
									{text}
								</>
							) : (
								<>
									{text}
									<span className="material-icons">
										{icon}
									</span>
								</>
							)
						) : (
							text
						)}
					</button>
				</Link>
			)}
		</>
	);
};

export default Button;
