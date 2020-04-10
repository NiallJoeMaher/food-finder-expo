import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ResultsList({ result }) {
  const { titleText, image, reviewText, container } = styles;
    const { name, image_url, rating, review_count } = result;
    if (image_url) {
        return (
            <View style={container}>
                <Image style={image} source={{ uri: image_url}}/>
              <Text style={titleText}>{name}</Text>
              <Text style={reviewText}>{rating} Stars, {review_count} Reviews</Text>
            </View>
          );
    }
    return null;
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  reviewText: {
    color: "#666"
  },
  image: {
      height: 120,
      width: 250,
      borderRadius: 4,
      marginBottom: 5
  }, 
  container: {
      marginLeft: 10
  }
});
