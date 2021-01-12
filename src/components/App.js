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
import GameOverScreen from './GameOverScreen';

export default class App extends React.Component {
  first = Math.random() * 4
  state = {
    screen: 0, //0=start, 1=game 2=gameOver
    score: 0, //every correct press adds one to the score
    currentPattern: [this.first], //pattern that needs to be followed
    index: 0,
  };
  startGame = () => {
    this.setState({screen: 1});
  };

  box0Pressed = () => {

  };
  box1Pressed = () => {

  };
  box2Pressed = () => {

  };
  box3Pressed = () => {

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
        <GameScreen
          score={this.state.score}
          box0Pressed={this.box0Pressed}
          box1Pressed={this.box1Pressed}
          box2Pressed={this.box2Pressed}
          box3Pressed={this.box3Pressed}
        />
      );
    }
    if (this.state.screen === 2) {
      return(
        <GameOverScreen
          score={this.state.score}
          restart={this.startGame}
        />
      );
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
