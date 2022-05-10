import { createContext, useState } from "react";
import { useWindowDimensions } from "react-native";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const { width, height } = useWindowDimensions();

  const [theme, setTheme] = useState({
    backgroundColor: "green",
    color: "purple",
    fontSize: 100,
  });

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }
  function decrementCounter() {
    setCounter(counter - 1);
  }
  function randomNumberGenerator() {
    return Math.floor(Math.random() * 100 + 1);
  }

  const value = {
    theme,
    setTheme,
    width,
    height,
    counter,
    incrementCounter,
    decrementCounter,
    randomNumberGenerator
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
