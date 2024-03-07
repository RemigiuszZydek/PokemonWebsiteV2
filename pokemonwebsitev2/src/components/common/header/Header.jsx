import React from "react";
import Navbar from "../navbar";
import "./Header.css";
import pokeballLogo from "../../../images/pokeballLogo.png";

function Header() {
	return (
		<section className="header">
			<section className="header-top">
				<section className="header-top_logo">
					<a href="/" className="header-logo">
						<img
							src={pokeballLogo}
							alt="Logo"
							className="header_logo_image"
						></img>
					</a>
				</section>
				<section className="header-top_navbar">
					<Navbar />
				</section>
			</section>
		</section>
	);
}
export default Header;
