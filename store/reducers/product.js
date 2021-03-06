import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/product";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/product";

const initialState = {
  availableProducts: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        availableProducts: action.products,
        userProduct: action.products.filter((prod) => prod.ownerId === "u1"),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userProduct: state.userProduct.filter(
          (product) => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid
        ),
      };
    case CREATE_PRODUCT:
      const newProduct = new Product(
        action.productData.id,
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProduct: state.userProduct.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProduct.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedProduct = new Product(
        action.pid,
        state.userProduct[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProduct[productIndex].price
      );
      const updatedUserProducts = [...state.userProduct];
      updatedUserProducts[productIndex] = updatedProduct;

      const availableProductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const upadtedAvailableProducts = [...state.availableProducts];
      upadtedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: upadtedAvailableProducts,
        userProduct: updatedUserProducts,
      };
  }

  return state;
};
