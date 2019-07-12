import dummyInvoiceData from "./dummyInvoiceData.js";
import {
  SELECT_INVOICE,
  SAVE_INVOICE,
  EDIT_MODE_TOGGLE
} from "../actions/types";

const INITIAL_STATE = {
  loadedInvoices: [...dummyInvoiceData],
  selectedInvoice: dummyInvoiceData[0],
  editMode: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_INVOICE:
      return { ...state, selectedInvoice: action.payload };
      break;
    case EDIT_MODE_TOGGLE:
      return { ...state, editMode: !state.editMode };
    default:
      return state;
  }
};
