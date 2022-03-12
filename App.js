import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { combineReducers, createStore } from "redux";
import productReducer from "./store/reducers/product";
import cartReducer from "./store/reducers/cart";
import { Provider } from "react-redux";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
