import React from 'react';
import "./Specials.css";
import greekSalad from "../assets/salad-small.jpg";
import bruschetta from "../assets/bruchetta-small.jpg";
import lemonDesert from "../assets/lemon-dessert.jpg";
import SpecialCard from "./SpecialCard";
import YellowCTA from "./YellowCTA";

function Specials() {
	const specials = [
		{
			image: greekSalad,
			title: "Greek Salad",
			price: "$12.99",
			description: "The famous greek salad of crispy " +
				"lettuce, peppers, olive and our Chicago " +
				"style feta cheese, garnished with crunchy " +
				"garlic and rosemary croutons.",
		},
		{
			image: lemonDesert,
			title: "Lemon Desert",
			price: "$5.00",
			description: "This comes stright from grandma's " +
				"recipe book, every last ingredient has " +
				"been sourced and is authentic as can be imagined.",
		},
		{
			image: bruschetta,
			title: "Bruschetta",
			price: "$5.99",
			description: "Our Bruschetta is made from grilled " +
				"bread that has been smeared with garlic and " +
				"seasoned with salt and olive oil.",
		},
	];

	return (
		<section id="specials">
			<div id="specials-header">
				<h2>This week&apos;s specials!</h2>
				<YellowCTA to="/menu" text="Online Menu" />
			</div>
			<div className="special-cards">
				{specials.map((special, index) => (
					<SpecialCard
						key={index}
						image={special.image}
						title={special.title}
						price={special.price}
						description={special.description}
					/>
				))}
			</div>
		</section>
	);
}

export default Specials;
