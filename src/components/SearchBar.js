import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({value, onChangeText, onEndEditing}) {
  const { container, icon, input } = styles;
  
  return (
    <View style={container}>
      <Feather name="search" style={icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={input}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  },
  input: {
    flex: 1,
    fontSize: 18
  }
});
