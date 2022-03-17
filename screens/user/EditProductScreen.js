import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../store/actions/product";

const EditProductScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  console.log(route.params);
  const prodId = route.params && route.params.id;
  const editedProduct = useSelector((state) =>
    state.products.userProduct.find((prod) => prod.id === prodId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(editedProduct ? editedProduct.price : "");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(
        productActions.updateProduct(prodId, title, description, imageUrl)
      );
    } else {
      dispatch(
        productActions.createProduct(title, description, imageUrl, +price)
      );
    }
  }, [title, imageUrl, price, description]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params ? "Edit Product" : "Add Product",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-checkmark"
            onPress={() => {
              submitHandler();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Image Url</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.wrapper}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.wrapper}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: { margin: 20 },
  wrapper: { width: "100%" },
  label: { marginVertical: 8, fontWeight: "bold" },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
  },
});
