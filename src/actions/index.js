import {
  OWNER_LOGIN,
  BROKER_LOGIN,
  TENANT_LOGIN,
  GET_DETAILS,
  LOG_OUT,
  PROPERTY_BOOK,
} from "./ActionTypes";

export const ownerLogin = () => {
  localStorage.setItem("ownerLoggedIn", "true");
  return {
    type: OWNER_LOGIN,
  };
};

export const brokerLogin = () => {
  localStorage.setItem("brokerLoggedIn", "true");
  return {
    type: BROKER_LOGIN,
  };
};

export const tenantLogin = () => {
  localStorage.setItem("tenantLoggedIn", "true");
  return {
    type: TENANT_LOGIN,
  };
};

export const getDetails = (id) => { 
  localStorage.setItem("id", id);
  return {
    type: GET_DETAILS,
    payload: id
  };
};

export const propertyBook = (propertyId) => { 
  localStorage.setItem("propertyId", propertyId);
  return {
    type: PROPERTY_BOOK,
    payload: propertyId
  };
};

export const logOut = () => {
  localStorage.clear();
  return {
    type: LOG_OUT,
  };
};
