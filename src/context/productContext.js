import { useReducer, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import reducer from "../reducer/ProductReducer";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureproducts: [],
  isSingleLoading: false,
  singleProduct: {}
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  // my 1st api call for single product

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.get(url);
      const products = await response.data;
      console.log("line 35 inside product context", products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };


  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const response = await axios.get(url);
      const singleProducts = await response.data;
      dispatch({ type: "SET_SINGLE_API_DATA", payload: singleProducts });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext, AppContext };
