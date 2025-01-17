import React from 'react';
// see https://stackoverflow.com/questions/57861187/property-tobeinthedocument-does-not-exist-on-type-matchersany/66708479#66708479
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from './App';

test('render attended', () => {
  render(<App />);
  const element = screen.getByText(/attended/i);
  expect(element).toBeInTheDocument();
});

test('render absent', () => {
  render(<App />);
  const element = screen.getByText(/absent/i);
  expect(element).toBeInTheDocument();
});

