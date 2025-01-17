import SearchPanel from "./components/SearchPanel.tsx";
import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "./theme.ts";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SearchPanel />
      </ThemeProvider>
    </div>
  );
}
