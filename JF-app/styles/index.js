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
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:5,
        marginVertical:5,

        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    primaryButton: {
        width: 165,
        height: 65,
    },

    secondaryButton: {
        width:65,
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    }
});