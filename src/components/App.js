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
import WelcomeScreen from './WelcomeScreen';
import AnimationScreen from './AnimationScreen';

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
        screen: 3,
        index: 0,
        score: 0,
        currentPattern: [this.first],
      });
    });
  };

  box0Pressed = () => {
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
              screen: 3,
            });
          }
      //wrong input
      if (this.state.currentPattern[this.state.index] !== 0) {
        return ({
          screen: 2,
        });
      }
    });
  };
  box1Pressed = () => {
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
              screen: 3,
            });
          }
      //wrong input
      if (this.state.currentPattern[this.state.index] !== 1) {
        return ({
          screen: 2,
        });
      }
    });
  };
  box2Pressed = () => {
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
              screen: 3,
            });
          }
      //wrong input
      if (this.state.currentPattern[this.state.index] !== 2) {
        return ({
          screen: 2,
        });
      }
    });
  };
  box3Pressed = () => {
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
              screen: 3,
            });
          }
      //wrong input
      if (this.state.currentPattern[this.state.index] !== 3) {
        return ({
          screen: 2,
        });
      }
    });
  };

  updateScreen = () => {
    this.setState(() => {
      return ({screen: 1,});
    });
  };

  render() {
    if(this.state.screen === 0) {
      return (
        <WelcomeScreen start={this.startGame}/>
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
          updateScreen={this.updateScreen}
          screen={this.state.screen}
        />
      );
    }
  }
};
