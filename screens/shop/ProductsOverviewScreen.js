import React, { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItemComponent from "../../components/shop/ProductItemComponent";
import * as cartAction from "../../store/actions/cart";
import Colors from "../../constants/Colors";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName="md-cart"
            onPress={() => navigation.navigate("Cart")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItemComponent
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              title: itemData.item.title,
            });
          }}
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() =>
              navigation.navigate("ProductDetail", {
                productId: itemData.item.id,
                title: itemData.item.title,
              })
            }
          />
          <Button
            color={Colors.primary}
            title="To cart"
            onPress={() => {
              dispatch(cartAction.addToCart(itemData.item));
            }}
          />
        </ProductItemComponent>
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
