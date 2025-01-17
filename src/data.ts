
// Sample data, keeping it very simple. We'd otherwise fetch data from an API.

import {Student} from "@/types.ts";

const students: Student[] = [
  { id: 1, name: 'Dianne Russel', email: 'jane@hotmail.com', category: 'attended' },
  { id: 2, name: 'Ronald Richards', email: 'jane@hotmail.com', category: 'attended' },
  { id: 3, name: 'Arlene McCoy', email: 'jane@hotmail.com', category: 'attended' },
  { id: 4, name: 'Kathryn Murphy', email: 'jane@hotmail.com', category: 'attended' },
  { id: 5, name: 'Savannah Nguyen', email: 'jane@hotmail.com', category: 'attended' },
  { id: 6, name: 'Albert Flores', email: 'jane@hotmail.com', category: 'absent' },
  { id: 7, name: 'Jenny Wilson', email: 'jane@hotmail.com', category: 'absent' },
  { id: 8, name: 'Wade Warren', email: 'jane@hotmail.com', category: 'absent' },
  { id: 9, name: 'Bessie Cooper', email: 'jane@hotmail.com', category: 'absent' },
  { id: 10, name: 'Ralph Edwards', email: 'jane@hotmail.com', category: 'absent' },
];

export default students;
