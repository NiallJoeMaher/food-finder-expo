import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsLists";

import useYelp from "../hooks/useYelp";

export default function HomeScreen() {

  const { container, searchContainer, resultContainer } = styles;
  const [searchValue, setSearchValue] = useState("burger");

  const [searchApi, results, state] = useYelp();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price)
  }

  const views = {
    LOADING: <Text>Loading</Text>,
    READY: (
      <ScrollView>
        <View style={resultContainer}>
          <ResultsList results={filterResultsByPrice("€")} title="Cost Effective" />
        </View>
        <View style={resultContainer}>
          <ResultsList results={filterResultsByPrice("€€")} title="Moderate expense" />
        </View>
        <View style={resultContainer}>
          <ResultsList results={filterResultsByPrice("€€€")} title="Big Spender" />
        </View>
      </ScrollView>
    ),
    ERROR: <Text>Something went Wrong</Text>
  };

  useEffect(() => {
    searchApi(searchValue);
  }, []);

  return (
    <View style={container}>
      <View style={searchContainer}>
        <SearchBar
          value={searchValue}
          onChangeText={value => setSearchValue(value)}
          onEndEditing={() => searchApi(searchValue)}
        />
        
      </View>
      {views[state]}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff"
  },
  searchContainer: {
    marginHorizontal: 10,
    marginTop: 10
  },
  resultContainer: {
    marginTop: 10
  }
});
