import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProductItemComponent = ({
  image,
  title,
  price,
  onViewDetail,
  onAddToCart,
}) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: { image } }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <View style={styles.action}>
        <Button title="View Details" onPress={onViewDetail} />
        <Button title="To cart" onPress={onAddToCart} />
      </View>
    </View>
  );
};

export default ProductItemComponent;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  image: { width: "100%", height: "60%" },
  title: { fontSize: 18, marginVertical: 4 },
  price: { fontSize: 14, color: "#888" },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
