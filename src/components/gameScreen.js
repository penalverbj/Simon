import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class GameScreen extends React.Component {
  render() {
    return (
      <View style={styles.startContainer}>
          <Text>Game has started</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
    backgroundColor: '#F0F8FF',
  },
});
