import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Table,
  Icon,
  Button
} from "semantic-ui-react";

import InvoiceViewActionBar from "./InvoiceViewActionBar";
import InvoiceForm from "./InvoiceForm/InvoiceForm";

class InvoiceView extends Component {
  render() {
    return (
      <Container style={{ marginTop: "5rem" }}>
        <InvoiceViewActionBar
          history={this.props.history}
        ></InvoiceViewActionBar>
        <InvoiceForm initialValues={this.props.selectedInvoice}></InvoiceForm>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedInvoice: state.invoices.selectedInvoice,
    editMode: state.invoices.editMode
  };
};
export default connect(
  mapStateToProps,
  null
)(InvoiceView);
