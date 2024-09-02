import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './YellowCTA.css';

function YellowCTA({ to, text }) {
	return (
		<div className="yellow-cta">
			<Link to={to}>{text}</Link>
		</div>
	);
}

YellowCTA.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default YellowCTA;
