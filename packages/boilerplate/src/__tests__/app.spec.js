import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app';

test('renders a message', () => {
  const { container, getByText } = render(<App />);
  expect(getByText('Welcome To React Boilerplate!')).toBeInTheDocument();
});
