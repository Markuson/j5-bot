import React from 'react';
import { Text } from 'react-native';
import styles from '../../../styles'
import Camera from '../Camera'
import Controls from '../Controls'


function Main({
onStop,
onMove
}) {
    const { title } = styles

    return (
        <>
            <Text style={title}>JF-Bot</Text>
            <Camera />
            <Controls onStop={onStop} onMove={onMove} />
        </>
    );
}

export default Main