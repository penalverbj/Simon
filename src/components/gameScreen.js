import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

export default class GameScreen extends React.Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    box0Pressed: PropTypes.func.isRequired,
    box1Pressed: PropTypes.func.isRequired,
    box2Pressed: PropTypes.func.isRequired,
    box3Pressed: PropTypes.func.isRequired,
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
        <TouchableOpacity
          style={styles.box0}
          onPress={this.props.box0Pressed}
        />
        <TouchableOpacity
          style={styles.box1}
          onPress={this.props.box1Pressed}
        />
        <TouchableOpacity
          style={styles.box2}
          onPress={this.props.box2Pressed}
        />
        <TouchableOpacity
          style={styles.box3}
          onPress={this.props.box3Pressed}
        />
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
});
