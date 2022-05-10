import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../contexts/themeContext";
import ThemeSelector from "./ThemeSelector";
import Counter from "./Counter";
import CounterButtons from "./CounterButtons";

function Content() {
  const { theme, width, height, randomNumberGenerator } =
    useContext(ThemeContext);
  return (
    <View style={[theme, styles.container, { width: width, height: height }]}>
      <Text>Here is a random number: {randomNumberGenerator()}</Text>
      <Text style={theme}>Hello!</Text>
      <ThemeSelector />
      <Counter />
      <CounterButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Content;
