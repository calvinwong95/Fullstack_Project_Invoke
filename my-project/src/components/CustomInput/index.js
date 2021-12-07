import React from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';

const CustomInput = ({placeholder,value,setValue,secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput

                placeholder={placeholder} 
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
                style={styles.input}

                //styling
                placeholderTextColor='white'
                textAlign='center'
                selectionColor='white'
                shadowColor='white'
                shadowOpacity='0.5'
                shadowRadius= '3'
                color='white'
                
                >

            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        
        // padding:10 ,
        
        // borderWidth: 1,
        // borderRadius: 5,
        
        // marginVertical: 5,
        // backgroundColor:'white',

        width: '90%',
    
        color: "white",
        backgroundColor: "#222",
        borderRadius: 30,
        borderColor: "cyan",
        borderWidth: 1,
        
        padding: 0.5,
        marginTop: 5,
        marginBottom: 5,
        

        

        
    },

    input: {
       
    }
})
export default CustomInput;