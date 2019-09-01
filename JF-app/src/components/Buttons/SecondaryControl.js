import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles'

function SecondaryControl({
    onPress,
    title
}) {
  const { text, button, secondaryButton } = styles

  return (
    <TouchableOpacity onPress={onPress} style={[button, secondaryButton]}>
            <Text style={text}>{title}</Text>
        </TouchableOpacity>
  );
}

export default SecondaryControl