import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.css';

function TestimonialCard({ stars, image, name, testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars">
        {Array.from({ length: stars }).map((_, index) => (
          <span key={index} className="testimonial-star">★</span>
        ))}
      </div>
      <img src={image} alt={name} className="testimonial-image" />
      <h2 className="testimonial-name">{name}</h2>
      <p className="testimonial-review">{testimonial}</p>
    </article>
  );
}

TestimonialCard.propTypes = {
  stars: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
};

export default TestimonialCard;
