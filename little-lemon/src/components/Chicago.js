import React from 'react';
import "./Chicago.css";
import pasta from "../assets/pasta-small.jpg";

function Chicago() {
	return (
		<section id="about">
			<article>
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					Little Lemon is a charming neighborhood bistro that serves simple food and
					classic cocktails in a lively but casual environment.  The restaurant features
					a locally-sourced menu with daily specials.
				</p>
			</article>
			<aside>
				<img src={pasta} alt="Pasta with tomatoes, basil, and garlic" />
			</aside>
		</section>
	);
}

export default Chicago;
