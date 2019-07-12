import { SELECT_INVOICE, SAVE_INVOICE, EDIT_MODE_TOGGLE } from "./types";

export const selectInvoice = invoice => {
  return {
    type: SELECT_INVOICE,
    payload: invoice
  };
};
