import React, { Component } from "react";
import { Grid, Form, Segment, Divider, Table, Header } from "semantic-ui-react";

import { reduxForm, Field, FieldArray, getFormValues } from "redux-form";
import { connect } from "react-redux";

import FormTextField from "./FormTextField";

class InvoiceForm extends Component {
  renderTotal = () => {
    return 0;
  };
  render() {
    return (
      <Segment inverted>
        <Form inverted>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column floated="left" width={5}>
                <Field
                  name="invoiceTitle"
                  component={FormTextField}
                  label="Invoice Title"
                  largeText
                />
                <Field
                  name="invoiceId"
                  component={FormTextField}
                  label="Invoice Number"
                  disabled
                  largeText
                  width={5}
                />
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Field
                  name="invoiceStatus"
                  component={FormTextField}
                  label="Invoice Status"
                  largeText
                />
                <Field
                  name="invoiceIssueDate"
                  component={FormTextField}
                  label="Invoice Date"
                  largeText
                />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column floated="left" width={5}>
                <Field
                  name="invoiceBillFrom"
                  component={FormTextField}
                  label="Bill From"
                  largeText
                />
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Field
                  name="invoiceBillTo"
                  component={FormTextField}
                  label="Bill To"
                  largeText
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Table inverted selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={1}>#</Table.HeaderCell>
                <Table.HeaderCell width={2}>Product Code</Table.HeaderCell>
                <Table.HeaderCell width={4}>Description</Table.HeaderCell>
                <Table.HeaderCell width={1}>Category</Table.HeaderCell>
                <Table.HeaderCell width={2}>Unit Price</Table.HeaderCell>
                <Table.HeaderCell width={1}>Quantity</Table.HeaderCell>
                <Table.HeaderCell width={2}>Item Total</Table.HeaderCell>
                {this.props.editMode ? (
                  <Table.HeaderCell width={1}>Actions</Table.HeaderCell>
                ) : (
                  ""
                )}
              </Table.Row>
            </Table.Header>

            <Table.Body>FieldArray HERE</Table.Body>
          </Table>
          <Header as="h1" textAlign="right" color="grey">
            Total: {this.renderTotal()}
          </Header>
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: "invoiceForm"
})(InvoiceForm);
