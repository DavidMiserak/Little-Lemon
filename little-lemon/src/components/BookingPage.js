import React, { useReducer } from 'react';
import './BookingPage.css';
import BookingForm from './BookingForm';
import timeReducer from '../reducers/timeReducer';

const initialState = {
	availableTimes: [],
};

function BookingPage() {
	const [state, dispatch] = useReducer(timeReducer, initialState);
	const handleDateChange = (selectedDate) => {
		// Dispatch action to set available times based on selected date
		dispatch({
			type: 'SET_AVAILABLE_TIMES',
			payload: selectedDate
		});
	};

	return (
		<main className="booking-page">
			<h1>Book a table</h1>
			<BookingForm
				availableTimes={state.availableTimes}
				onDateChange={handleDateChange}
			/>
		</main >
	);
}

export default BookingPage;
