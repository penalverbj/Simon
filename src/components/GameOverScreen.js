import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

export default class GameOverScreen extends React.Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    restart: PropTypes.func.isRequired,
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.gameOver}>Game Over</Text>
          <Text style={styles.score}>Score: {this.props.score}</Text>
          <TouchableOpacity onPress={this.props.restart}>
            <Text style={styles.startButton}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  gameOver: {
    fontSize: 50,
    marginBottom: 50,
    fontFamily: 'monospace',
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  score: {
    fontSize: 35,
    marginBottom: 50,
    fontFamily: 'monospace',
    color: 'white',
  },
  startButton: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    padding: 10,
    fontFamily: 'monospace',
    color: 'white',
    borderColor: 'white',
    borderRadius: 15,
  },
});
