import React from 'react';
import { View, } from 'react-native';
import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import styles from '../../../styles'

function Controls({
    onStop,
    onMove
}) {
    const { controls, row } = styles

    return (
        <View style={controls}>
            <View style={row}>
                <SecondaryButton onPressIn={() => onMove('DFL')} onPressOut={() => onStop()} title='DfL' />
                <PrimaryButton onPressIn={() => onMove('F')} onPressOut={() => onStop()} title='F' />
                <SecondaryButton onPressIn={() => onMove('DFR')} onPressOut={() => onStop()} title='DfR' />
            </View>
            <View style={row}>
                <PrimaryButton onPressIn={() => onMove('L')} onPressOut={() => onStop()} title='L' />
                <PrimaryButton onPressIn={() => onMove('R')} onPressOut={() => onStop()} title='R' />
            </View>
            <View style={row}>
                <SecondaryButton onPressIn={() => onMove('DBL')} onPressOut={() => onStop()} title='DbL' />
                <PrimaryButton onPressIn={() => onMove('B')} onPressOut={() => onStop()} title='B' />
                <SecondaryButton onPressIn={() => onMove('DBR')} onPressOut={() => onStop()} title='DbR' />
            </View>
        </View>
    );
}

export default Controls