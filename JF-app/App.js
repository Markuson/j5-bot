import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles'
import Main from './src/components/Main'


export default function App() {
  const { container } = styles

  const [error, setError] = useState(null)

  const handleMove = (direction) => {

    (async () => {
      const path = `http://192.168.1.161:8080`;
      try {
        const response = await fetch(`${path}/jfbot/move`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "dir": direction.toLowerCase(),
            "vel": 255,
            "time": 0
          })
        })
        console.log(response.json())
        return response
      } catch (error) {
        setError(error.message)
        console.log(error.message)
        console.log(path)
      }
    })()
  }

  const handleStop = () => {

    (async () => {
      const path = `http://192.168.1.161:8080`;
      try {
        const response = await fetch(`${path}/jfbot/move`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "dir": 's',
            "vel": 255,
            "time": 0
          })
        })
        console.log(response.json())
        return response
      } catch (error) {
        setError(error.message)
        console.log(error.message)
        console.log(path)
      }
    })()
  }
  return (
    <View style={container}>
      <Main onStop={handleStop} onMove={handleMove} />
    </View>
  );
}
