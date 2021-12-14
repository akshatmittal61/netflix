import React from "react";

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
	);
};

export default Button;
