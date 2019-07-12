import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import invoiceReducer from "./invoiceReducer";
const rootReducer = combineReducers({
  form: formReducer,
  invoices: invoiceReducer
});

export default rootReducer;
