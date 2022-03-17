import React, { useLayoutEffect } from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItemComponent from "../../components/shop/ProductItemComponent";
import Colors from "../../constants/Colors";
import * as productAction from "../../store/actions/product";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const UserProductScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Edit"
            iconName="ios-create"
            onPress={() => navigation.navigate("EditProduct")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const userProduct = useSelector((state) => state.products.userProduct);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={userProduct}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItemComponent
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            navigation.navigate("EditProduct", itemData.item);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              navigation.navigate("EditProduct", itemData.item);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() =>
              dispatch(productAction.deleteProduct(itemData.item.id))
            }
          />
        </ProductItemComponent>
      )}
    />
  );
};

export default UserProductScreen;

const styles = StyleSheet.create({});
