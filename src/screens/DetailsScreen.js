import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../services/yelp";

export default function DetailsScreen({ route }) {
  const [ result, setResult ] = useState(null)

  const getDetails = async () => {
    const response = await yelp(`/${route.params.id}`);
    setResult(response);
  }

  useEffect(() => {
    getDetails();
  },[])

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item} ) => <Image style={styles.image} source={{uri: item}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    text: {
      fontSize: 24
    },
    image: {
      height: 200,
      width: 300,
      borderRadius: 15,
      marginBottom: 15
    }
});
