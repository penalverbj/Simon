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
  first = Math.floor(Math.random() * 4);
  state = {
    screen: 0, //0=start, 1=game 2=gameOver 3=animation
    score: 0, //every correct press adds one to the score
    currentPattern: [this.first], //pattern that needs to be followed
    index: 0,
  };
  startGame = () => {
    this.setState(() => {
      return({
        screen: 1,
        index: 0,
        score: 0,
        currentPattern: [this.first],
      });
    });
    console.log(this.state.currentPattern);
    console.log(this.state.index);
  };

  box0Pressed = () => {
    console.log("PATTERN");
    console.log(this.state.currentPattern);
    console.log("INDEX");
    console.log(this.state.index);
    this.setState((prevState) => {
      //index is not last and correct input
      if (this.state.index < this.state.currentPattern.length - 1 &&
          this.state.currentPattern[this.state.index] === 0) {
            return ({
              index: prevState.index + 1,
            });
          }
      //index is last and correct input
      if (this.state.index == this.state.currentPattern.length - 1 &&
          this.state.currentPattern[this.state.index] === 0) {
            let newPattern = this.state.currentPattern.concat(
                  Math.floor(Math.random() * 4));
            return ({
              index: 0,
              score: prevState.score + 1,
              // TODO: call updatePattern and show new pattern here
              currentPattern: newPattern,
            });
          }
      //wrong input
      if (this.state.currentPattern[this.state.index] !== 0) {
        return ({
          screen: 2,
        });
      }
    });
    console.log("PATTERN2");
    console.log(this.state.currentPattern);
    console.log("INDEX2");
    console.log(this.state.index);
  };
  box1Pressed = () => {
    console.log("PATTERN");
    console.log(this.state.currentPattern);
    console.log("INDEX");
    console.log(this.state.index);
    this.setState((prevState) => {
      //index is not last nd correct input
      if (this.state.index < this.state.currentPattern.length - 1 &&
          this.state.currentPattern[this.state.index] === 1) {
            return ({
              index: prevState.index + 1,
            });
          }
      //index is last and correct input
      if (this.state.index == this.state.currentPattern.length - 1 &&
          this.state.currentPattern[this.state.index] === 1) {
            let newPattern = this.state.currentPattern.concat(
                  Math.floor(Math.random() * 4));
            return ({
              index: 0,
              score: prevState.score + 1,
              // TODO: call updatePattern and show new pattern here
              currentPattern: newPattern,
            });
          }
      //wrong input
      if (this.state.currentPattern[this.state.index] !== 1) {
        return ({
          screen: 2,
        });
      }
    });
    console.log("PATTERN2");
    console.log(this.state.currentPattern);
    console.log("INDEX2");
    console.log(this.state.index);
  };
  box2Pressed = () => {
    console.log("PATTERN");
    console.log(this.state.currentPattern);
    console.log("INDEX");
    console.log(this.state.index);
    this.setState((prevState) => {
      //index is not last nd correct input
      if (this.state.index < this.state.currentPattern.length - 1 &&
          this.state.currentPattern[this.state.index] === 2) {
            return ({
              index: prevState.index + 1,
            });
          }
      //index is last and correct input
      if (this.state.index == this.state.currentPattern.length - 1 &&
          this.state.currentPattern[this.state.index] === 2) {
            let newPattern = this.state.currentPattern.concat(
                  Math.floor(Math.random() * 4));
            return ({
              index: 0,
              score: prevState.score + 1,
              // TODO: call updatePattern and show new pattern here
              currentPattern: newPattern,
            });
          }
      //wrong input
      if (this.state.currentPattern[this.state.index] !== 2) {
        return ({
          screen: 2,
        });
      }
    });
    console.log("PATTERN2");
    console.log(this.state.currentPattern);
    console.log("INDEX2");
    console.log(this.state.index);
  };
  box3Pressed = () => {
    console.log("PATTERN");
    console.log(this.state.currentPattern);
    console.log("INDEX");
    console.log(this.state.index);
    this.setState((prevState) => {
      //index is not last nd correct input
      if (this.state.index < this.state.currentPattern.length - 1 &&
          this.state.currentPattern[this.state.index] === 3) {
            return ({
              index: prevState.index + 1,
            });
          }
      //index is last and correct input
      if (this.state.index == this.state.currentPattern.length - 1 &&
          this.state.currentPattern[this.state.index] === 3) {
            let newPattern = this.state.currentPattern.concat(
                  Math.floor(Math.random() * 4));
            return ({
              index: 0,
              score: prevState.score + 1,
              // TODO: call updatePattern and show new pattern here
              currentPattern: newPattern,
            });
          }
      //wrong input
      if (this.state.currentPattern[this.state.index] !== 3) {
        return ({
          screen: 2,
        });
      }
    });
    console.log("PATTERN2");
    console.log(this.state.currentPattern);
    console.log("INDEX2");
    console.log(this.state.index);
  };

  updatePattern = () => {

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
    if (this.state.screen === 3) {
      return(
        <AnimationScreen
          score={this.state.score}
          pattern={this.state.currentPattern}
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
