import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ onRemove, qty, title, amount }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.qty}>{qty} </Text>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.text}>${amount}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
          <Ionicons name="md-trash" size={23} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  qty: { fontSize: 16, color: "#888" },
  text: { fontSize: 16, fontWeight: "bold" },
  deleteButton: { marginLeft: 20 },
});
