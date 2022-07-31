import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name} </Text>
      <Text>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  image: {
    marginBottom: 5,
    height: 150,
    width: 250,
    borderRadius: 8,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetails;
