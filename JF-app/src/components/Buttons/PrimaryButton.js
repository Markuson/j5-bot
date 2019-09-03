import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from '../../../styles'

function PrimaryControl(props) {
  const { text, button, primaryButton } = styles

  return (
    <View {...props} style={[button, primaryButton]}>
      <Text style={text}>{props.title}</Text>
    </View>
  );
}

function PrimaryButton({
  onPressIn,
  onPressOut,
  title
}) {

  const { text, button, primaryButton } = styles

  return (
      <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut} >
        <PrimaryControl title={title} />
      </TouchableWithoutFeedback>
  )
}

export default PrimaryButton