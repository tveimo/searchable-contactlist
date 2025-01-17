import React from 'react';
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import {SearchField} from "./SearchField.tsx";
import userEvent from '@testing-library/user-event';

test('render search field', () => {
  render(<SearchField placeholder="search" />);
  const element = screen.getByPlaceholderText(/search/i);
  expect(element).toBeInTheDocument();
});

test('has focus', () => {
  render(<SearchField placeholder="search" />);
  const element = screen.getByPlaceholderText(/search/i);
  element.focus();
  expect(element).toHaveFocus();
});

test('check initial value', () => {
  render(<SearchField placeholder="search" value="xyz" />);
  const element = screen.getByPlaceholderText(/search/i);
  expect(element).toHaveValue("xyz");
});

test('check text input with text value', async () => {
  render(<SearchField placeholder="search" />);
  const element = screen.getByPlaceholderText(/search/i);
  await userEvent.type(element, "abc");
  expect(element).toHaveValue("abc");
});

test('check text input with text change callback', async () => {
  let changeVal = "";
  function onChange(val: string) { changeVal = val; }

  render(<SearchField placeholder="search" onTextChange={onChange}/>);
  const element = screen.getByPlaceholderText(/search/i);
  await userEvent.type(element, "rtl");
  expect(changeVal).toEqual("rtl")
});
