import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles'


function Camera({

}) {
  const { camera } = styles

  return (
    <View style={camera}>
      <Text>camera image</Text>
    </ View>
  );
}

export default Camera