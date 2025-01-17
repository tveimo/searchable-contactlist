import { ContactList } from "../components/ContactList.tsx";
import React, {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Student} from "../types.ts";
import { ThemeProvider } from 'styled-components';
import theme from "../theme.ts";

import '../index.css';
import students from "../data.ts";

type StoryProps = ComponentProps<typeof ContactList> & {
  filter: string;
  category: string;
  entries: Student[];
};

const meta: Meta<StoryProps> = {
  component: ContactList,
  tags: ['autodocs'],
  argTypes: {
    filter: {
      name: 'Name filter',
      description: "Filter string to hide students that doesn't substring match the provided filter string",
      control: 'text',
    },
    category: {
      name: 'Category',
      options: ['attended', 'absent'],
      control: { type: 'radio' },
      description: "Category string used for heading and to filter out student that doesn't match the provided category.",
    },
    entries: {
      table: {
        disable: true,
      },
    },
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

const exampleCode = `
import students from "../data.ts";

const [filter, setFilter] = useState('');

return (
  <ContactList entries={students} filter={filter} category='attended'/>
);
`;

export const Example: Story = {
  args: {
    entries: students,
  },
  render: ({ entries, ...args }) => {
    return (
      <ThemeProvider theme={theme}>
        <ContactList entries={entries} {...args}/>
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
