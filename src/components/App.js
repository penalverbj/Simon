/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  state = {
    screen: 0, //0=start, 1=game 2=gameOver
  };
  startGame = () => {
    this.setState({screen: 1});
  };

  render() {
    if(this.state.screen === 0) {
      return (
        <>
        <View style={styles.startContainer}>
          <Text style={styles.welcome}>Welcome to Simon</Text>
          <TouchableOpacity onPress={this.startGame}>
            <Text style={styles.startButton}>START</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productionContainer}>
          <Text style={styles.production}>JPB</Text>
        </View>
        </>
      );
    }
    if(this.state.screen === 1) {
      return (
        <View style={styles.startContainer}>
            <Text>Game has started</Text>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
    backgroundColor: '#F0F8FF',
  },
  startButton: {
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 2,
    padding: 10,
    fontFamily: 'monospace',
  },
  welcome: {
    fontSize: 35,
    marginBottom: 50,
    fontFamily: 'monospace',
  },
  productionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  production: {
    fontFamily: 'monospace',
  },
});
