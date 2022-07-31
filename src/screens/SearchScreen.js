import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  // console.log(results);

  const filterbyPrice = (price) => {
    // price == '$' ||'$$' ||'$$$'
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <>
      {/*or can use this <View style={{ flex: 1 }}> */}
      <SearchBar
        term={term}
        onTermChange={(newterm) => {
          setTerm(newterm);
        }}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList results={filterbyPrice("$")} title="Cost Effective" />
        <ResultList results={filterbyPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterbyPrice("$$$")} title="Big Spender!" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
