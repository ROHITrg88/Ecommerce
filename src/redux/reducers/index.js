import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const Reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default Reducers;
