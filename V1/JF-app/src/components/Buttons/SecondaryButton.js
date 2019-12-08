import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../../../styles'

function SecondaryControl(props) {
  const { text, button, secondaryButton } = styles

  return (
    <View {...props} style={[button, secondaryButton]}>
      <Text style={text}>{props.title}</Text>
    </View>
  );
}

function SecondaryButton({
  onPressIn,
  onPressOut,
  title
}) {
  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <SecondaryControl title={title} />
    </TouchableWithoutFeedback>

  )
}

export default SecondaryButton