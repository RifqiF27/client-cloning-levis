import { baseUrl } from "../../config/baseUrl";
import {
  PRODUCT_FETCH_SUCCESS,
  CATEGORY_FETCH_SUCCESS,
  PRODUCT_BY_ID_FETCH_SUCCESS,
  CATEGORY_BY_ID_FETCH_SUCCESS,
} from "./actionType";

export function productFetchSuccess(payload) {
  return {
    type: PRODUCT_FETCH_SUCCESS,
    payload: payload,
  };
}

export function productByIdFetchSuccess(payload) {
  return {
    type: PRODUCT_BY_ID_FETCH_SUCCESS,
    payload: payload,
  };
}

export function categoryFetchSuccess(payload) {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload: payload,
  };
}

export function categoryByIdFetchSuccess(payload) {
  return {
    type: CATEGORY_BY_ID_FETCH_SUCCESS,
    payload: payload,
  };
}

export function fetchProduct() {
  return async function (dispatch) {
    try {
      const response = await fetch(baseUrl+"/products",{
        method: "GET",
        body: JSON.stringify(),
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        }
      });
      const resData = await response.json();
      if (!response.ok) throw resData;
      console.log(resData);
      dispatch(productFetchSuccess(resData));
    } catch (err) {
      throw err;
    }
  };
}

export function fetchProductById(id) {
  console.log(id);
  return async function (dispatch) {
    try {
      const response = await fetch(baseUrl + "/products/" + id,{
        method: "GET",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      console.log(resData);
      if (!response.ok) throw resData;
      dispatch(productByIdFetchSuccess(resData));
    } catch (err) {
      throw err;
    }
  };
}

export function fetchCategory() {
  return async function (dispatch) {
    try {
      const response = await fetch(baseUrl+"/categories",{
        method: "GET",
        body: JSON.stringify(),
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        }
      });
      const resData = await response.json();
      if (!response.ok) throw resData;
      // console.log(resData);
      dispatch(categoryFetchSuccess(resData));
    } catch (err) {
      throw err;
    }
  };
}


export function fetchCategoryById(id) {
  console.log(id);
  return async function (dispatch) {
    try {
      const response = await fetch(baseUrl + "/categories/" + id,{
        method: "GET",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      console.log(resData);
      if (!response.ok) throw resData;
      dispatch(categoryByIdFetchSuccess(resData));
    } catch (err) {
      throw err;
    }
  };
}
