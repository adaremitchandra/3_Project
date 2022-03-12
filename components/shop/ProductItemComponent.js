import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const ProductItemComponent = ({
  image,
  title,
  price,
  onViewDetail,
  onAddToCart,
}) => {
  return (
    <TouchableOpacity onPress={onViewDetail}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
        <View style={styles.action}>
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={onViewDetail}
          />
          <Button
            color={Colors.primary}
            title="To cart"
            onPress={onAddToCart}
          />
        </View>
      </View>
    </TouchableOpacity>
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
  image: { width: "100%", height: "100%" },
  title: { fontSize: 18, marginVertical: 4 },
  price: { fontSize: 14, color: "#888" },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // height: "25%",
    paddingHorizontal: 20,
  },
  details: {
    alignItems: "center",
    // height: "15%",
    padding: 10,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
