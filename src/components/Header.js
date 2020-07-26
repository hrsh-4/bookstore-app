import React from "react";

const navStyle = {
	width: "100%",
	height: "50px",
	background: "black",
	color: "beige",
	fontSize: "35px",
};

export default class Header extends React.Component {
	render() {
		return (
			<>
				<div style={navStyle} align="center">
				Book Store
			</div>
			<br/>
			</>

		);
	}
}