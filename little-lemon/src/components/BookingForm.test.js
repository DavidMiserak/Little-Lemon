import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
	it('Renders the BookingForm component', async () => {
		render(<BookingForm availableTimes={[]} onDateChange={() => { }} />);
		await screen.findByText(/choose date/i);
	});

	it('Renders the BookingForm component with available times', async () => {
		render(<BookingForm availableTimes={['12:00', '12:30']} onDateChange={() => { }} />);
		await screen.findByText(/12:00/i);
		await screen.findByText(/12:30/i);
	});

	it('Todays date can be selected', async () => {
		render(<BookingForm availableTimes={['12:00', '12:30']} onDateChange={() => { }} />);
		const today = new Date();
		const todayString = today.toISOString().split('T')[0];
		screen.getByLabelText(/choose date/i).value = todayString;
		expect(screen.getByLabelText(/choose date/i).value).toBe(todayString);
	});

	it('Number of guests can be selected', async () => {
		render(<BookingForm availableTimes={['12:00', '12:30']} onDateChange={() => { }} />);
		const guests = screen.getByLabelText(/number of guests/i);
		guests.value = 2;
		expect(guests.value).toBe('2');
	});

	it('Birthday can be selected', async () => {
		render(<BookingForm availableTimes={['12:00', '12:30']} onDateChange={() => { }} />);
		const occasion = screen.getByLabelText(/occasion/i);
		occasion.value = 'Birthday';
		expect(occasion.value).toBe('Birthday');
	});

	it('Form can be submitted', async () => {
		render(<BookingForm availableTimes={['12:00', '12:30']} onDateChange={() => { }} />);
		const resDate = screen.getByLabelText(/choose date/i);
		const resTime = screen.getByLabelText(/choose time/i);
		const resGuests = screen.getByLabelText(/number of guests/i);
		const resOccasion = screen.getByLabelText(/occasion/i);

		resDate.value = new Date().toISOString().split('T')[0];
		resTime.value = '12:00';
		resGuests.value = 2;
		resOccasion.value = 'Birthday';

		const submitButton = screen.getByRole('button', { name: /Make your reservation/i });
		submitButton.click();

		expect(screen.queryByText(/required/i)).toBeNull();
	});

	it('Check that blank form cannot be submitted', async () => {
		render(<BookingForm availableTimes={['12:00', '12:30']} onDateChange={() => { }} />);
		const submitButton = screen.getByRole('button', { name: /Make your reservation/i });

		submitButton.click();

		expect(screen.queryByText(/choose date/i)).not.toBeNull();
	});
});
