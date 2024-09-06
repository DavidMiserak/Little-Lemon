import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmBooking.css';

function ConfirmBooking() {
	const location = useLocation();
	const { resDate, resTime, resGuests, resOccasion } = location.state;
	return (
		<div className='confirm-booking'>
			<h1>Reservation Confirmation</h1>
			<p>Date: {resDate}</p>
			<p>Time: {resTime}</p>
			<p>Guests: {resGuests}</p>
			<p>Occasion: {resOccasion}</p>
		</div>
	);
}

export default ConfirmBooking;
