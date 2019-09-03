import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Main from './src/components/Main'


export default function App() {
  const { container } = styles

  const handleMove = (direction) => {
    console.log(`moving ${direction}`)
  }

  const handleStop = () => {
    console.log('STOP!')
  }
  return (
    <View style={container}>
      <Main onStop={handleStop} onMove={handleMove} />
    </View>
  );
}
