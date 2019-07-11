import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import InvoiceList from "./InvoiceList";
import InvoiceView from "./InvoiceView";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route path="/dashboard" exact component={InvoiceList} />
          <Route path="/invoice" exact component={InvoiceView} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
