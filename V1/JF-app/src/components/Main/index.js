import React from 'react';
import { Text } from 'react-native';
import styles from '../../../styles'
import Camera from '../Camera'
import Controls from '../Controls'


function Main({
    error,
    onStop,
    onMove
}) {
    const { title } = styles

    return (
        <>
            <Text style={title}>JF-Bot</Text>
            <Camera />
            <Controls onStop={onStop} onMove={onMove} />
            {error && <View>
                <Text>{error}</Text>
            </View>}
        </>
    );
}

export default Main