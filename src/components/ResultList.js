import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ResultList);

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "bold", marginLeft: 15, marginBottom: 5 },
  container: {
    marginBottom: 10,
  },
});
