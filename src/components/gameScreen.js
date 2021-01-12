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
    boxPressed: PropTypes.func.isRequired,
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
          style={styles.box1}>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box2}>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box3}>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box4}>
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
  box1: {
    borderRadius: 25,
    backgroundColor: 'red',
    width: 170,
    height: 170,
    margin: 1,
  },
  box2: {
    borderRadius: 25,
    backgroundColor: 'blue',
    width: 170,
    height: 170,
    margin: 1,
  },
  box3: {
    borderRadius: 25,
    backgroundColor: 'yellow',
    width: 170,
    height: 170,
    margin: 1,
  },
  box4: {
    borderRadius: 25,
    backgroundColor: 'green',
    width: 170,
    height: 170,
    margin: 1,
  },
});
