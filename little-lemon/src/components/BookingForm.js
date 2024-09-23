import React from 'react';
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	VStack,
	FormErrorMessage,
} from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { submitAPI } from '../api';

function BookingForm({ availableTimes, onDateChange, formSubmit }) {
	const ocassionOptions = ['Birthday', 'Anniversary'];

	const formik = useFormik({
		initialValues: {
			resDate: '',
			resTime: '',
			resGuests: 1,
			resOccasion: '',
		},
		onSubmit: (values) => {
			if (submitAPI(values)) {
				formik.setSubmitting(false);
				formSubmit(values);
				formik.resetForm();
			}
		},
		validationSchema: Yup.object({
			resDate: Yup.date().required('Required'),
			resTime: Yup.string().required('Required'),
			resGuests: Yup.number().required('Required').min(1, 'Minimum 1 guest'),
			resOccasion: Yup.string().required('Required'),
		}),
	});

	return (
		<Box
			p="1rem"
			rounded="md"
			w={{ base: '75%', md: '30%' }}
			m="auto"
			backgroundColor="#EDEFEE"
		>
			<form onSubmit={formik.handleSubmit}>
				<VStack spacing="1rem">
					<FormControl isInvalid={formik.errors.resDate && formik.touched.resDate}>
						<FormLabel htmlFor="resDate">Choose date</FormLabel>
						<Input
							id="resDate"
							name="resDate"
							type="date"
							onChange={(e) => {
								formik.setFieldValue('resDate', e.target.value); // Update Formik value
								onDateChange(e.target.value); // Call onDateChange with the actual date
							}}
							value={formik.values.resDate}
						/>
						<FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formik.errors.resTime && formik.touched.resTime}>
						<FormLabel htmlFor="resTime">Choose time</FormLabel>
						<Input
							id="resTime"
							name="resTime"
							as="select"
							{...formik.getFieldProps('resTime')}
						>
							{availableTimes.map((time, index) => (
								<option key={index} value={time}>
									{time}
								</option>
							))}
						</Input>
						<FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formik.errors.resGuests && formik.touched.resGuests}>
						<FormLabel htmlFor="resGuests">Number of guests</FormLabel>
						<Input
							id="resGuests"
							name="resGuests"
							type="number"
							min="1"
							max="10"
							placeholder="1"
							{...formik.getFieldProps('resGuests')}
						/>
						<FormErrorMessage>{formik.errors.resGuests}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formik.errors.resOccasion && formik.touched.resOccasion}>
						<FormLabel htmlFor="resOccasion">Occasion</FormLabel>
						<Input
							id="resOccasion"
							name="resOccasion"
							as="select"
							{...formik.getFieldProps('resOccasion')}
						>
							{ocassionOptions.map((occasion) => (
								<option key={occasion} value={occasion}>
									{occasion}
								</option>
							))}
						</Input>
						<FormErrorMessage>{formik.errors.resOccasion}</FormErrorMessage>
					</FormControl>

					<Button
						type="submit"
						isLoading={formik.isSubmitting}
						loadingText="Submitting..."
						colorScheme="yellow"
						aria-label="Make your reservation"
					>
						Make your reservation
					</Button>
				</VStack>
			</form>
		</Box>
	);
}

BookingForm.propTypes = {
	availableTimes: PropTypes.array.isRequired,
	onDateChange: PropTypes.func.isRequired,
	formSubmit: PropTypes.func.isRequired,
};

export default BookingForm;
