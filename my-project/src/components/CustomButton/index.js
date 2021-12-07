import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type , textType}) => {

    
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`] ]}>
            <Text style={styles[`text_${textType}`]}>{text}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create ({
    container: {
        
        width: '90%',
        
        padding: 5,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 30,
        borderColor: 'cyan',
        borderWidth: 1,
    },

    container_PRIMARY: {
        backgroundColor: 'black',
    },

    container_SECONDARY: {
        backgroundColor: '#e3e3e3',
    },

    container_LOGOUT : {
        
        width: '40%',
        
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'black',
    },

    text_PRIMARY: {
        fontWeight: 'bold',
        color: 'white',
        
        height: 20,
        alignItems: 'center',
    },

    text_SECONDARY: {
        fontWeight: 'bold',
        color: 'black',
       
        height: 20,
        alignItems:'center',
    }
});
export default CustomButton;
