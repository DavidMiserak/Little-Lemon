import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css';
import BookingForm from './BookingForm';
import timeReducer from '../reducers/timeReducer';
import { submitAPI } from '../api';

const initialState = {
	availableTimes: [],
};

function BookingPage() {
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(timeReducer, initialState);
	const handleDateChange = (selectedDate) => {
		// Dispatch action to set available times based on selected date
		dispatch({
			type: 'SET_AVAILABLE_TIMES',
			payload: selectedDate
		});
	};

	const formSubmit = (values) => {
		if (submitAPI(values)) {
			navigate('/confirm-booking', { state: { ...values } });
		}
	};

	return (
		<main className="booking-page">
			<h1>Book a table</h1>
			<BookingForm
				availableTimes={state.availableTimes}
				onDateChange={handleDateChange}
				formSubmit={formSubmit}
			/>
		</main >
	);
}

export default BookingPage;
