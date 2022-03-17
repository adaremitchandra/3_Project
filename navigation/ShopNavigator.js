import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Group
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="ProductsOverview"
          component={ProductsOverviewScreen}
        />
        <Drawer.Screen name="Orders" component={OrdersScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Main"
            component={MainNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={({ route }) => ({
              title: route.params.title,
            })}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
