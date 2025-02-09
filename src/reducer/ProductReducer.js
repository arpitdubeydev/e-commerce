const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((currentElement) => {
        // featured attribute will come from api
        return currentElement.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        featureproducts: featureData
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true
      };

    case "SET_SINGLE_API_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload
      };

      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true
        };

    default:
      return state;
  }
};

export default ProductReducer;
