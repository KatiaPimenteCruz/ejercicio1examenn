import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('renders Full Stack Application navbar and Add User button', async () => {
  axios.get.mockResolvedValue({ data: [] });

  render(<App />);

  const linkElement = await screen.findByText(/Full Stack Application/i);
  const addUserButton = screen.getByText(/Add User/i);

  expect(linkElement).toBeInTheDocument();
  expect(addUserButton).toBeInTheDocument();
});
