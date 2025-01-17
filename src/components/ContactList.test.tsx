import React from 'react';
import {render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom'
import {Student} from "../types.ts";
import students from "../data.ts";
import ContactList, {toggle} from "./ContactList.tsx";

const entries: Student[] = students;

test('render contact list', () => {
  render(<ContactList entries={entries} filter=""/>);
  const element = screen.getByText(/Dianne Russel/i);
  expect(element).toBeInTheDocument();
});

test('render with filter, check we still have contacts', () => {
  render(<ContactList entries={entries} filter="d" category="attended"/>);
  expect(screen.getByText(/Dianne Russel/i)).toBeInTheDocument();
  expect(screen.getByText(/Ronald Richards/i)).toBeInTheDocument();
});

test('render with filter, check we still have contacts', () => {
  render(<ContactList entries={entries} filter="d" category="absent"/>);
  expect(screen.getByText(/Wade Warren/i)).toBeInTheDocument();
  expect(screen.getByText(/Ralph Edwards/i)).toBeInTheDocument();
});

test('check number of results with filter', () => {
  render(<ContactList entries={entries} filter="d"/>);
  const elements = screen.getAllByRole("listitem");
  expect(elements).toHaveLength(2);
});

test('check number of results no filter', () => {
  render(<ContactList entries={entries} category="attended" filter=""/>);
  const elements = screen.getAllByRole("listitem");
  expect(elements).toHaveLength(5);
});

test('test accordion', () => {
  render(<ContactList entries={entries} category="attended" filter=""/>);
  const elements = screen.getAllByRole("accordion-toggle");
  expect(elements).toHaveLength(1);
});

test('test toggleSelection', () => {
  let sel = [1,2,3,4,5,6,7,8];
  expect(sel).toHaveLength(8);
  sel = toggle(sel, 1);
  expect(sel).toHaveLength(7);
  sel = toggle(sel, 5);
  expect(sel).toHaveLength(6);
  sel = toggle(sel, 5);
  expect(sel).toHaveLength(7);
})
