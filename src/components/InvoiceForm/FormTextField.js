import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

//This component shows either an inputField or a Text Heading according to the value of the prop "editMode"
//"editMode" is meant to be a key in redux(state.invoices.editMode)
class FormTextField extends React.Component {
  renderInputOrDisplayAccordingToEditMode = () => {
    const {
      editMode,
      label,
      input,
      width,
      disabled,
      meta: { invalid, pristine, error },
      largeText
    } = this.props;

    if (editMode) {
      return (
        <>
          <Form.Input
            label={label}
            value={input.value}
            onChange={input.onChange}
            width={width}
            disabled={disabled}
            error={invalid && !pristine}
          />
          <span>{error}</span>
        </>
      );
    } else {
      if (this.props.largeText) {
        return (
          <>
            <h5>{label}</h5>
            <h2>{input.value}</h2>
          </>
        );
      } else {
        return (
          <>
            <span>{label}</span>
            <span>{input.value}</span>
          </>
        );
      }
    }
  };

  render() {
    return this.renderInputOrDisplayAccordingToEditMode();
  }
}

const mapStateToProps = state => {
  return { editMode: state.invoices.editMode };
};

export default connect(
  mapStateToProps,
  null
)(FormTextField);
