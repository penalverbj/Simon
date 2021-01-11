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
  };
  render() {
    return (
      <>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>
          Score: {this.props.score}
        </Text>
      </View>
      <View style={styles.startContainer}>

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
  startContainer: {
    backgroundColor: '#F0F8FF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flex: 5,
  },
  scoreContainer: {
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 20,
  },
  score: {
    fontSize: 25,
    fontFamily: 'monospace',
  },
  box1: {
    borderWidth: 2,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'red',
    width: 170,
    height: 170,
  },
  box2: {
    borderWidth: 2,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'blue',
    width: 170,
    height: 170,
  },
  box3: {
    borderWidth: 2,
    borderRightWidth: 1,
    borderTopWidth: 1,
    backgroundColor: 'yellow',
    width: 170,
    height: 170,
  },
  box4: {
    borderWidth: 2,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    backgroundColor: 'green',
    width: 170,
    height: 170,
  },
});
