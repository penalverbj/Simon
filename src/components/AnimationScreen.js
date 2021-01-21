import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';

export default class AnimationScreen extends React.Component {

  state = {
    fadeAnim0: new Animated.Value(0),
    fadeAnim1: new Animated.Value(0),
    fadeAnim2: new Animated.Value(0),
    fadeAnim3: new Animated.Value(0),

  };

  fadeIn = (num) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state[`fadeAnim${num}`], {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(({ finished }) => {
      this.fadeOut(num);
      });
  };

  fadeOut = (num) => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state[`fadeAnim${num}`], {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  i = 0;
  play = () => {
    setTimeout(() => {
      this.fadeIn(this.props.pattern[this.i]);
      this.i++;
      if (this.i < this.props.pattern.length) {
        this.play();
      } else {
        this.i = 0;
        setTimeout(() => {this.props.updateScreen();}, 700);
      }
    }, 1000);
  }

  static propTypes = {
    score: PropTypes.number.isRequired,
    pattern: PropTypes.array.isRequired,
    updateScreen: PropTypes.func.isRequired,
  };
  render() {
    return (
      <>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>
          Score: {this.props.score}
        </Text>
      </View>
      <View style={styles.boxesContainer}>
        <Animated.View
          style={[
            styles.box0,
            {
              opacity: this.state.fadeAnim0
            }
          ]}
        />
        <Animated.View
          style={[
            styles.box1,
            {
              opacity: this.state.fadeAnim1
            }
          ]}
        />
        <Animated.View
          style={[
            styles.box2,
            {
              opacity: this.state.fadeAnim2
            }
          ]}
        />
        <Animated.View
          style={[
            styles.box3,
            {
              opacity: this.state.fadeAnim3
            }
          ]}
        />
        <TouchableOpacity onPress={this.play}>
          <Text style={styles.startButton}>PLAY</Text>
        </TouchableOpacity>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  boxesContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flex: 3,
  },
  scoreContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  score: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'white',
  },
  startButton: {
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 2,
    padding: 10,
    marginTop: 20,
    fontFamily: 'monospace',
    color: 'white',
    borderColor: 'white',
    borderRadius: 15,
  },
  box0: {
    borderRadius: 25,
    backgroundColor: 'red',
    width: 170,
    height: 170,
    margin: 1,
  },
  box1: {
    borderRadius: 25,
    backgroundColor: 'blue',
    width: 170,
    height: 170,
    margin: 1,
  },
  box2: {
    borderRadius: 25,
    backgroundColor: 'yellow',
    width: 170,
    height: 170,
    margin: 1,
  },
  box3: {
    borderRadius: 25,
    backgroundColor: 'green',
    width: 170,
    height: 170,
    margin: 1,
  },
  buttonRow: {
   flexDirection: "row",
   marginVertical: 16
 }
});
