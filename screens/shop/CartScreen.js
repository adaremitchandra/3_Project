import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";

const CartScreen = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformCartItems = [];
    for (const key in state.cart.items) {
      transformCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformCartItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total :
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
        />
      </View>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={(itemData) => (
            <CartItem
              qty={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              onRemove={() => {}}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, margin: 20 },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: { fontSize: 18 },
  amount: { color: Colors.primary },
});
