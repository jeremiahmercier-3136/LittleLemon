import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './Components/Main';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});


test('initializeTimes returns the expected initial time slots', () => {
  const result = initializeTimes();
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same time slots regardless of input', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const selectedDate = new Date(); // placeholder for future logic
  const result = updateTimes(currentState, selectedDate);
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});
