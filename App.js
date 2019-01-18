/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Images = [
  {
    uri: "https://i.imgur.com/mxgtWKt.jpg",
    label: "Cat on a blue blanket"
  },

  {
    uri: "https://i.imgur.com/XCRnNWn.jpg",
    label: "A cat toy"
  },

  {
    uri: "https://i.imgur.com/dqQX1K0.jpg",
    label: "A close up of a dog"
  },

  {
    uri: "https://i.imgur.com/nZXbSbh.jpg",
    label: "Sheep next to a cat"
  },

  {
    uri: "https://i.imgur.com/mXCjefR.jpg",
    label: "Cat laying on the grass"
  },

  {
    uri: "https://i.imgur.com/AGyxRcc.jpg",
    label: "Bird sitting on a railing"
  }
];

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef'
  },
  image: {
    flex: 2,
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageLabel: {
    textAlign: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    color: 'white',
    width: 320
  },
  empty: {
    flex: 1
  }
});
