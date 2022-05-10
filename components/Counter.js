import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { View, Text, StyleSheet } from "react-native";

function Counter() {
  const { counter } = useContext(ThemeContext);

  return (
    <View style={styles.counterHolder}>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 90,
  },
  counterHolder: {
    alignItems: "center",
  },
});

export default Counter;
