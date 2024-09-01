import React from "react";
import "./CustomersSay.css";
import aliceHeadshot from "../assets/Alice.webp";
import TestimonialCard from "./TestimonialCard";

function CustomersSay() {
	const testimonials = [
		{
			stars: 5,
			image: aliceHeadshot,
			name: "Alice Waters",
			testimonial: "I love Little Lemon! The food is amazing and the atmosphere is so cozy.",
		},
		{
			stars: 4,
			image: aliceHeadshot,
			name: "Alice Waters",
			testimonial: "I love Little Lemon! The food is amazing and the atmosphere is so cozy.",
		},
		{
			stars: 3,
			image: aliceHeadshot,
			name: "Alice Waters",
			testimonial: "I love Little Lemon! The food is amazing and the atmosphere is so cozy.",
		},
		{
			stars: 2,
			image: aliceHeadshot,
			name: "Alice Waters",
			testimonial: "I love Little Lemon! The food is amazing and the atmosphere is so cozy.",
		},
	];

	return (
		<section id="testimonials">
			<div id="testimonial-header">
				<h1>Testimonials</h1>
			</div>
			<div className="testimonial-cards">
				{testimonials.map((testimonial, index) => (
					<TestimonialCard
						key={index}
						stars={testimonial.stars}
						image={testimonial.image}
						name={testimonial.name}
						testimonial={testimonial.testimonial}
					/>
				))}
			</div>
		</section>
	);
}

export default CustomersSay;
