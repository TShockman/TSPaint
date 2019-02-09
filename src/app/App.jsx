import React, {Component} from 'react';
import PropTypes from 'prop-types';
import theme from './app.scss';
import Sidebar from './modules/sidebar';
import Studio from './modules/studio';
import {Provider} from 'react-redux';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div className="app">
          <Sidebar/>
          <Studio/>
        </div>
      </Provider>
    )
  }
}