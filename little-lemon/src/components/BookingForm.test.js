import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
	it('Renders the BookingForm component', async () => {
		render(<BookingForm availableTimes={[]} onDateChange={() => { }} />);
		await screen.findByText(/choose date/i);
	});
});
