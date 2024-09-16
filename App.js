import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [message, setMessage] = useState("");

  const checkGuess = () => {
    const guess = parseInt(inputValue);
    if (isNaN(guess)) {
      setMessage("Ange ett giltigt nummer.");
    } else if (guess < targetNumber) {
      setMessage("För lågt, försök igen!");
    } else if (guess > targetNumber) {
      setMessage("För högt, försök igen!");
    } else {
      setMessage("Bra jobbat! Du gissade rätt!");
      // Du kan också här generera ett nytt nummer om du vill fortsätta spela
      setTargetNumber(Math.floor(Math.random() * 100) + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gissa Numret</Text>
      <TextInput
        style={styles.input}
        placeholder="Skriv din gissning här"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Gissa" onPress={checkGuess} />
      <Text style={styles.result}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    color: "#666",
  },
});
