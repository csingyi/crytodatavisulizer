
import React, { Component } from 'react';
import { Screen, Divider } from '@shoutem/ui';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import {StyleSheet,View,Text} from 'react-native'

import rootReducer from './reducer';
import { initData } from './actions';
import CurrentValue from './CurrentValue';
import TransactionVolumeGraph from './TransactionVolumeGraph';
import Description from './Description';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        // createLogger()
    )
);

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(initData());     

    }

    render() {
        return (
          <Screen>
                <Divider />
                <CurrentValue />
                <Divider />
                <Divider />
                <TransactionVolumeGraph />
                <Divider />
                <Description />
            </Screen>
        )
    }
}



const ConnectedApp = connect(state => state)(App);

export default () => (
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});