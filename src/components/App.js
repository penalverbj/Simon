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
import GameScreen from './GameScreen';

export default class App extends React.Component {
  state = {
    screen: 0, //0=start, 1=game 2=gameOver
    score: 0, //every correct press adds one to the score
    currentPattern: [], //pattern that needs to be followed
    index: 0,
  };
  startGame = () => {
    this.setState({screen: 1});
  };

  boxPressed = (boxNum) => {
    // //Wrong box is pressed and game is over
    // if (this.state.currentPattern[this.state.index] !== boxNum) {
    //   this.rightBox();
    // }
    // //box pressed is correct
    // else {
    //   this.wrongBox();
    // }
  };

  rightBox = () => {
    this.setState({
      currentPattern: [],
      index: 0,
      lastPressed: null,
      screen: 2,
    });
  };

  wrongBox = () => {
    this.setState((prevState) => {
      return ({
        index: prevState.index + 1,
      });
    });
  }

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
        <GameScreen
          score={this.state.score}
          boxPressed={this.boxPressed()}
        />
      );
    }
    if (this.state.screen === 2) {
      <View style={styles.startContainer}>
        <Text>Game Over</Text>
      </View>
    }
  }
};

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    backgroundColor: 'black',
  },
  startButton: {
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 2,
    padding: 10,
    fontFamily: 'monospace',
    color: 'white',
    borderColor: 'white',
  },
  welcome: {
    fontSize: 35,
    marginBottom: 50,
    fontFamily: 'monospace',
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  productionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  production: {
    fontFamily: 'monospace',
    color: 'white',
  },
});
