import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import { Provider } from 'mobx-react';
import TestStore from '../store/TestStore';

export default class Setup extends Component {
  state: {
    store: Object,
    isLoading: boolean
  };
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={TestStore}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}
