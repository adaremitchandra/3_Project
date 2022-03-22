import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./store/reducers/product";
import cartReducer from "./store/reducers/cart";
import orderReducer from "./store/reducers/order";
import ReduxThunk from "redux-thunk";

import { Provider } from "react-redux";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
