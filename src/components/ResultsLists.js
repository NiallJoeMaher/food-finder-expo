import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

import ResultsDetail from "./ResultsDetail";

export default function ResultsList({ title, results }) {
  const { titleText, container } = styles;

  const navigation = useNavigation();

  if (!results.length) {
    return null;
  }

  return (
    <View style={container}>
      <Text style={titleText}>{title}</Text>
      {!results ? (
        <Text>{`No results for "${title}"`}</Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={results => results.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Details", {
                id: item.id
              })}>
                <ResultsDetail result={item} />
              </TouchableOpacity>  
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold"
  },
});
