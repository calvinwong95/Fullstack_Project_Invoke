import React , {useState , useEffect, useRef} from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, Animated} from "react-native";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import { loginUser, clearError } from '../../actions';
import { miniSerializeError } from '@reduxjs/toolkit';









const SignIn = ({navigation}) => {
    
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const loginInfo = useSelector(state=>state.login);
    const errorInfo = useSelector(state=>state.error);

    console.log(errorInfo);

    // useEffect(() => {
       
        

    // });
    
    const onSignInPressed = () => {
        console.log(loginInfo);
        dispatch(loginUser({username,password}));
        console.log(loginInfo);
        if(loginInfo.token){
            console.log(loginInfo);
            dispatch(clearError());
            navigation.navigate(`TabNav`);
        }
        
    }

    const onRegisterPressed = () => {
        // console.warn('Registering');
        navigation.navigate(`Register`);
    }

    return (
       
        <View style={styles.container}>
         
                   
            <Text style={[styles.Logo,]}>ve[N]ue</Text>
    
            
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
                secureTextEntry={false}
            />
            {errorInfo.name !== "" && <Text style={styles.errorText}>{errorInfo.name}</Text>}

            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />
            {errorInfo.password !== "" && <Text style={styles.errorText}>{errorInfo.password}</Text>}
            {errorInfo.error !=="" && <Text style={styles.errorText}>{errorInfo.error}</Text>}
            <CustomButton 
                onPress={onSignInPressed} 
                text="Sign In" 
                type="PRIMARY" 
                textType="PRIMARY"
            />

            <CustomButton 
                onPress={onRegisterPressed} 
                text="Don't have an account? Register here!" 
                type="SECONDARY" 
                textType="SECONDARY"
            />
            

        </View>
        

  

    )
}

const styles = StyleSheet.create( {
    container: {
        width:'100%',
        height: 100,
        backgroundColor: "#222",

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        paddingHorizontal: 10,
    },
    Logo: {
        width: '100%',
        height: 100,
        
        backgroundColor: '#222',
        
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 5,
        textShadowColor: 'white',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 10,
        textAlign:'center',
        alignItems:'center',
        paddingVertical: 20,
        marginTop:30,
    },

    errorText: {
        color: 'cyan',
    }

});
export default SignIn;
