import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Main from './src/components/Main'


export default function App() {
  const { container } = styles
  return (
    <View style={container}>
      <Main/>
    </View>
  );
}
