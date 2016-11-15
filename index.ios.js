/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import VideoPlayer from './VideoPlayer';

export default class App extends Component {
  render() {
    return (
        <VideoPlayer
            source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4?v=8' }}
            title="Oceans"
        />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('videoplayer', () => App);
