import React from 'react';
import slab from "../assets/food-slab-small.jpg";
import "./CallToAction.css";
import YellowCTA from "./YellowCTA";

function CallToAction() {
	return (
		<header className="customers-say">
			<article>
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					We are a family owned Mediterranean restaurant,
					focused on traditional recipes with a modern twist.
				</p>

				<br />
				<YellowCTA to="/booking" text="Book a Table" />
			</article>

			<aside>
				<img src={slab} alt="slab with food" />
			</aside>
		</header>
	);
}

export default CallToAction;
