import React from "react";
import ThemeContextProvider from "./contexts/themeContext";
import Content from './components/Content';

export default function App() {

  return (
    <ThemeContextProvider>
      <Content />
    </ThemeContextProvider>
  );
}
