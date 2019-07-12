import React, { Component } from "react";
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

import { connect } from "react-redux";
import { toggleEditMode } from "../actions";

class InvoiceViewActionBar extends Component {
  render() {
    const { editMode } = this.props;
    return (
      <>
        {editMode ? (
          <Segment textAlign="right">
            <Button.Group>
              <Button
                onClick={() => {
                  this.props.toggleEditMode();
                }}
              >
                Cancel
              </Button>
              <Button.Or />
              <Button positive>Save</Button>
            </Button.Group>
          </Segment>
        ) : (
          <Segment textAlign="right">
            <Button
              icon
              floated="left"
              labelPosition="left"
              onClick={() => {
                this.props.history.push("/dashboard");
              }}
            >
              Back
              <Icon name="arrow left" />
            </Button>
            <Button
              icon
              labelPosition="left"
              onClick={() => {
                //trigger editmode via AC
                this.props.toggleEditMode();
              }}
            >
              Edit
              <Icon name="edit" />
            </Button>
          </Segment>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    editMode: state.invoices.editMode
  };
};

export default connect(
  mapStateToProps,
  { toggleEditMode }
)(InvoiceViewActionBar);
