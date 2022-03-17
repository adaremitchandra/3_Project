import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";

const OrderItem = ({ amount, date, items }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.text}>${amount.toFixed(2)}</Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? "Hide Details" : "Show Details"}
        onPress={() => {
          setShowDetails(!showDetails);
        }}
      />
      {showDetails && (
        <View style={styles.detailItem}>
          {items.map((cartItem) => (
            <CartItem
              key={cartItem}
              qty={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productItem}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  text: { fontSize: 20 },
  detailItem: { width: "100%" },
});
