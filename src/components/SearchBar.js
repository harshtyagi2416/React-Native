import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={30} style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        term={term}
        onChangeText={(newterm) => onTermChange(newterm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 40,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 5,
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  icon: {
    color: "#413C3B",
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
