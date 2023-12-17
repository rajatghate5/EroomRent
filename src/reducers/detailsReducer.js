import {
  OWNER_LOGIN,
  BROKER_LOGIN,
  TENANT_LOGIN,
  ADMIN_LOGIN,
  GET_DETAILS,
  LOG_OUT,
  PROPERTY_BOOK,
} from "../actions/ActionTypes";

const initialState = {
  ownerLoggedIn: localStorage.getItem("ownerLoggedIn") === "true",
  brokerLoggedIn: localStorage.getItem("brokerLoggedIn") === "true",
  tenantLoggedIn: localStorage.getItem("tenantLoggedIn") === "true",
  adminLoggedIn: localStorage.getItem("adminLoggedIn") === "true",
  id: localStorage.getItem("id") || "",
  propertyId: localStorage.getItem("propertyId") || "",
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case OWNER_LOGIN:
      return {
        ...state,
        ownerLoggedIn: true,
      };

    case BROKER_LOGIN:
      return {
        ...state,
        brokerLoggedIn: true,
      };

    case TENANT_LOGIN:
      return {
        ...state,
        tenantLoggedIn: true,
      };

    case ADMIN_LOGIN:
      return {
        ...state,
        adminLoggedIn: true,
      };

    case GET_DETAILS:
      return {
        ...state,
        id: action.payload,
      };

    case PROPERTY_BOOK:
      return {
        ...state,
        propertyId: action.payload,
      };

    case LOG_OUT:
      return {
        ...state,
        ownerLoggedIn: false,
        brokerLoggedIn: false,
        tenantLoggedIn: false,
        adminLoggedIn: false,
        id: "",
        propertyId: "",
      };

    default:
      return state;
  }
};

export default detailReducer;
