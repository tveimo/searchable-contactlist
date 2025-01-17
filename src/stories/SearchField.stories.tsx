import { SearchField } from "../components/SearchField.tsx";
import { fn } from '@storybook/test';
import React, {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import theme from "../theme.ts";

import '../index.css';

type StoryProps = ComponentProps<typeof SearchField> & {
  value: string;
  placeholder: string;
};

const meta: Meta<StoryProps> = {
  component: SearchField,
  tags: ['autodocs'],
  argTypes: {
    value: {
      name: 'Value',
      description: "Initial input field value.",
      control: 'text',
    },
    placeholder: {
      name: 'Placeholder',
      description: "Default text shown before the user enters any search filter terms.",
      control: 'text',
    },
  },
  args: {
    onTextChange: fn(),
  },
};

export default meta;

const exampleCode = `
const [filter, setFilter] = useState('');

function onChange(val: string) { setFilter(val); }

return (
  <SearchField onTextChange={onChange} value={filter} placeholder="Search"/>
);
`;

type Story = StoryObj<StoryProps>;

export const Example: Story = {
  render: ({ ...args }) => {
    return (
      <ThemeProvider theme={theme}>
          <SearchField {...args}/>
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
