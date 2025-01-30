import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.head}>CarStore</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  head: {
    justifyContent: "center",
    backgroundColor: "orange",
    fontSize: 25,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "orange",
  },
});
