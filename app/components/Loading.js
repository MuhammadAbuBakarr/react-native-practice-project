import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

const LoaderSpinner = () => {
 return (
  <View style={styles.container}>
   <ActivityIndicator size={50} color="#0000ff" />
   <Text style={styles.loadingText}>Getting Pizzas...</Text>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
 loadingText: {
  marginTop: 10,
  fontSize: 16,
  fontWeight: "bold",
  color: "#000",
 },
});

export default LoaderSpinner;
