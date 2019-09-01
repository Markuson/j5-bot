import React from 'react';
import {Button, Text} from 'react-native';
import styles from '../../../styles'
import Camera from '../Camera'
import Controls from '../Controls'


function Main({
}) {
    const { title } = styles

    return (
        <>
            <Text style={title}>JF-Bot</Text>
            <Camera />
            <Controls />
        </>
    );
}

export default Main