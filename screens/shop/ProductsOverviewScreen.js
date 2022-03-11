import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItemComponent from "../../components/shop/ProductItemComponent";

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProduct);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
      <ProductItemComponent/>
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
