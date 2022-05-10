import React, {useContext} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ThemeContext } from "../contexts/themeContext";

function CounterButtons() {
    const { incrementCounter, decrementCounter } =
    useContext(ThemeContext);

  return (
    <View style={styles.buttonHolder}>
    <Pressable style={styles.button} onPress={incrementCounter}>
      <Text>+</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={decrementCounter}>
      <Text>-</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        backgroundColor: "grey",
        padding: 4,
        borderRadius: 12,
        textAlign: "center",
        marginHorizontal: 5,
        width: 30
    },
    buttonHolder: {
        flexDirection: "row",
        justifyContent: "center",
        
    }
})

export default CounterButtons