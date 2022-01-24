import { ActionTypes } from "../constants/action-types";
import FakeStore from "../../API/fakestore";

export const setProducts = () => async (dispatch) => {
  const response = await FakeStore.get("/products");
  console.log(response.data);
  dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
};

export const selectedProduct = (id) => async (dispatch) => {
  const response = await FakeStore.get(`/products/${id}`);
  console.log(response.data);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
