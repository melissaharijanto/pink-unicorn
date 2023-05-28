import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class Classroom360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Classroom360
          </Text>
        </View>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(17, 0, 158, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  greetingBox: {
    padding: 20,
  },
  greeting: {
    fontSize: 50,
  },
});

AppRegistry.registerComponent('Classroom360', () => Classroom360);
