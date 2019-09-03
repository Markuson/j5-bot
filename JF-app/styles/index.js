import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor: 'lightyellow',
    },
    title: {
        flex: 1,
        paddingTop: 30,
        fontSize: 60,
        fontWeight: 'bold',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        textAlign: 'center',
    },
    camera: {
        flex: 3,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'black',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    controls: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },

    row:{
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    button: {
        display: 'flex',
        height: 62,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:2,
        marginVertical:2,

        backgroundColor: '#2AC062',
    },

    primaryButton: {
        width: 165,
    },

    secondaryButton: {
        width:82,
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    }
});