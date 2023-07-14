import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const img =
 "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?b=1&s=612x612&w=0&k=20&c=6SaifqG2ewZkdPgZxplxjNgKP-ibs1sAwrnbDrLwLOg=";
const ProductCard = ({ image, name, price, description }) => {
 return (
  <View style={styles.container}>
   <Image src={image} style={styles.image} resizeMode="cover" />
   <View style={styles.detailsContainer}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>Price: ${price}</Text>
    <Text style={styles.description}>{description}</Text>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: 10,
  marginVertical: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
 },
 image: {
  width: 100,
  height: 100,
  borderRadius: 8,
 },
 detailsContainer: {
  flex: 1,
  marginLeft: 10,
  justifyContent: "center",
 },
 name: {
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 5,
 },
 price: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#888",
 },
 description: {
  fontSize: 14,
  marginTop: 5,
 },
});

export default ProductCard;
