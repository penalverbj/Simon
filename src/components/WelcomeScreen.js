import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

export default class WelcomeScreen extends React.Component {
  static propTypes = {
    start: PropTypes.func.isRequired,
  };
  render() {
      return (
        <>
        <View style={styles.startContainer}>
          <Text style={styles.welcome}>Welcome to Simon</Text>
          <TouchableOpacity onPress={this.props.start}>
            <Text style={styles.startButton}>START</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productionContainer}>
          <Text style={styles.production}>JPB</Text>
        </View>
        </>
      );
  };
}

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
    borderRadius: 15,
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
