import React from 'react';
import { View } from 'react-native';
import PrimaryControl from '../Buttons/PrimaryControl'
import SecondaryControl from '../Buttons/SecondaryControl'
import styles from '../../../styles'

function Controls({

}) {
  const { controls, row } = styles

    return (
        <View style={controls}>
            <View style={row}>
                <SecondaryControl onPress={() => console.log('BUTON!')} title='DfL' />
                <PrimaryControl onPress={() => console.log('BUTON!')} title='F' />
                <SecondaryControl onPress={() => console.log('BUTON!')} title='DfR' />
            </View>
            <View style={row}>
                <PrimaryControl onPress={() => console.log('BUTON!')} title='L' />
                <PrimaryControl onPress={() => console.log('BUTON!')} title='R' />
            </View>
            <View style={row}>
                <SecondaryControl onPress={() => console.log('BUTON!')} title='DbL' />
                <PrimaryControl onPress={() => console.log('BUTON!')} title='B' />
                <SecondaryControl onPress={() => console.log('BUTON!')} title='DbR' />
            </View>
        </View>
    );
}

export default Controls