import { SearchPanel } from "../components/SearchPanel.tsx";
import React, {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import theme from "../theme.ts";

import '../index.css';

type StoryProps = ComponentProps<typeof SearchPanel> & {
};

const meta: Meta<StoryProps> = {
  component: SearchPanel,
  tags: ['autodocs'],
  argTypes: {
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

const exampleCode = `
export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SearchPanel />
      </ThemeProvider>
    </div>
  );
}
`;

export const Basic: Story = {
  args: {},
  render: () => {
    return (
      <ThemeProvider theme={theme}>
        <SearchPanel />
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
