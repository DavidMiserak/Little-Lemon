import React from 'react';
import PropTypes from 'prop-types';
import './SpecialCard.css';

function SpecialCard({ title, description, price, image }) {
  return (
    <article className="special-card">
      <img src={image} alt="special" />
      <div>
        <h2>{title}</h2>
        <h3 className="special-price">{price}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

SpecialCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SpecialCard;
