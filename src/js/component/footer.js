import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>FOLLOW STAR WARS:</p>
		<img src="http://www.gifmaniacos.com/Star-Wars/Corellian-Corvette/SW026.gif" width="90px" />
		<br />
		<button>
			<a className="fab fa-instagram" href="https://www.instagram.com/starwars/" />
		</button>
		<button>
			<a className="fab fa-facebook" href="https://www.facebook.com/StarWars" />
		</button>
		<button>
			<a className="fab fa-twitter" href="https://twitter.com/starwars" />
		</button>
		<div>
			<p id="copyright">TM &amp; © Lucasfilm Ltd. All Rights Reserved</p>
		</div>
	</footer>
);
