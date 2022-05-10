import React, { useContext } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../contexts/themeContext";

function ThemeSelector() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() =>
          setTheme({ backgroundColor: "blue", color: "salmon", fontSize: 100 })
        }
      >
        <Text>Blue Theme</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() =>
          setTheme({
            backgroundColor: "purple",
            color: "yellow",
            fontSize: 100,
          })
        }
      >
        <Text>Purple Theme</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() =>
          setTheme({ backgroundColor: "green", color: "purple", fontSize: 100 })
        }
      >
        <Text>Original Theme</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    borderWidth: 2,
    padding: 5,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

export default ThemeSelector;
