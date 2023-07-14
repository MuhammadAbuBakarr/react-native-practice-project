import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import useAxios from "./app/hooks/useAxios";
import LoaderSpinner from "./app/components/Loading";
import ProductCard from "./app/components/PizzaCard";
export default function App() {
 const { getPizzas, pizzas, loading } = useAxios();
 console.log("object");
 return (
  <View style={styles.container}>
   <Button
    onPress={() => getPizzas()}
    title="Get Pizzas"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
   />
   <Text>{loading}</Text>
   {/* {!pizzas?.length > 0 && (
    <Button
     onPress={() => getPizzas()}
     title="Get Pizzas"
     color="#841584"
     accessibilityLabel="Learn more about this purple button"
    />
   )}
   {loading && <LoaderSpinner />}
   {pizzas?.length > 1 && (
    <ScrollView>
     {!loading &&
      pizzas?.map((pizza, index) => (
       <ProductCard
        key={index}
        image={pizza.img}
        name={pizza.name}
        price={pizza.price}
        description={pizza.description}
       />
      ))}
    </ScrollView>
   )} */}
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#fff",
  padding: 30,
  marginTop: 10,
 },
 text: {
  borderColor: "black",
  borderWidth: 2,
  padding: 20,
  borderRadius: 20,
 },
});
