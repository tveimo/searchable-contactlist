import { ContactListItem } from "../components/ContactListItem.tsx";
import { fn } from '@storybook/test';
import React, {ComponentProps, useState} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Student} from "../types.ts";
import { ThemeProvider } from 'styled-components';
import theme from "../theme.ts";

import '../index.css';

type StoryProps = ComponentProps<typeof ContactListItem> & {
  student: Student;
};

const meta: Meta<StoryProps> = {
  component: ContactListItem,
  tags: ['autodocs'],
  argTypes: {
    sel: {
      name: 'Selected',
      type: 'boolean',
      description: "Set to true if we want to highlight a contact list entry as selected.",
      control: 'boolean',
    },
    hover: {
      name: 'Hover',
      type: 'boolean',
      description: "Set true to simulate a mouse-over hover event on the contact list entry",
      // control: 'boolean',
    },
    showEmail: {
      name: 'Show Email',
      type: 'boolean',
      description: "Show / hide the email in the contact list entry.",
    },
    student: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

const exampleCode = `
const [selection, setSelection] = useState<number[]>();

function toggleSelection(id: number) {
  setSelection(toggle([...(selection ? selection : [])], id));
}

function isSelected(id: number): boolean {
  return selection ? selection.includes(id) : false
};

return (
  <ContactListItem onClick={toggleSelection} sel={isSelected(student.id)} student={student}/>
);
`;

export const Default: Story = {
  args: {
    student: {id: 1, name: 'Jane Doe', email: 'janedoe@gmail.com'} as Student,
  },
  render: ({ student, ...args }) => {
    return (
      <ThemeProvider theme={theme}>
        <ol style={{listStyle: 'none', padding: '8px 12px'}}>
          <ContactListItem student={student} {...args}/>
        </ol>
      </ThemeProvider>
    );
  },
  parameters: {
    docs: {
      source: {
        code: exampleCode,
        language: 'tsx'
      },
    },
  },
};

export const WithoutEmail: Story = {
  args: {
    student: {id: 1, name: 'John Doe', email: 'johndoe@gmail.com'} as Student,
    showEmail: false,
  },
  render: ({ student, ...args }) => {
    return (
      <ThemeProvider theme={theme}>
        <ol style={{listStyle: 'none', padding: '8px 12px'}}>
          <ContactListItem student={student} {...args}/>
        </ol>
      </ThemeProvider>
    );
  },
  parameters: {
    docs: {
      source: {
        code: exampleCode,
        language: 'tsx'
      },
    },
  },
};

