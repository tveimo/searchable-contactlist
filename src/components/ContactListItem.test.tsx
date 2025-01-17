import React from 'react';
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ContactListItem from "./ContactListItem.tsx";
import {Student} from "@/types.ts";

const student: Student = { id: 1, name: "John Smith", email: "joesmith@hotmail.com", category: "absent" }

test('render contact list item', () => {
  render(<ContactListItem student={student}/>);
  const element = screen.getByText(/John Smith/i);
  expect(element).toBeInTheDocument();
});

test('has email field', () => {
  render(<ContactListItem student={student}/>);
  const element = screen.getByText(/joesmith@hotmail.com/i);
  expect(element).toBeInTheDocument();
});

test('has no email field', () => {
  render(<ContactListItem student={student} showEmail={false}/>);
  expect(() => screen.getByText(/joesmith@hotmail.com/i)).toThrow();
});

test('check have profile image', () => {
  render(<ContactListItem student={student} />);
  const element = screen.getByAltText(/profile/i);
  expect(element).toBeInTheDocument();
});
