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

class InvoiceList extends Component {
  handleSelectInvoice = invoice => {
    //select invoice in redux via AC, then nagivate
    this.props.history.push("/invoice");
  };

  renderTableRows = () => {
    return this.props.invoices.map(invoice => (
      <Table.Row key={Date.now()}>
        <Table.Cell>{invoice.invoiceId}</Table.Cell>
        <Table.Cell>{invoice.invoiceIssueDate}</Table.Cell>
        <Table.Cell>{invoice.invoiceTitle}</Table.Cell>
        <Table.Cell>{invoice.invoiceBillTo}</Table.Cell>
        <Table.Cell>{invoice.invoiceStatus}</Table.Cell>
        <Table.Cell>{invoice.invoiceGrandTotal}</Table.Cell>
        <Table.Cell textAlign="right">
          <Button icon labelPosition="right" onClick={this.handleSelectInvoice}>
            View
            <Icon name="file alternate outline" />
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  };

  render() {
    return (
      <Container style={{ marginTop: "5rem" }}>
        <Segment textAlign="right">
          <Button icon labelPosition="right" onClick={() => {}}>
            Fetch Invoices
            <Icon name="download" />
          </Button>
        </Segment>

        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Issue Date</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Bill To</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Amount (GBP)</Table.HeaderCell>
              <Table.HeaderCell textAlign="center" width={2}>
                Actions
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderTableRows()}</Table.Body>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    invoices: state.invoices.loadedInvoices
  };
};

export default connect(
  mapStateToProps,
  null
)(InvoiceList);
