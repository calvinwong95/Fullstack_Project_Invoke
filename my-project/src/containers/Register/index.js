import React , {useState} from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions';







const Register = ({navigation}) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [retypePassword,setReTypePassword] = useState("");
    const [email,setEmail] = useState("");

    const userDetails = {username,password,retypePassword,email}
    const dispatch = useDispatch();


    const onRegisterPressed = () => {
        console.warn("Registration Complete");
        dispatch(addUser(userDetails));
        setTimeout(() => {
            navigation.navigate("Welcome");
        },1000)
    }

    return (
   
         <View style={styles.container}>
            <CustomInput
              placeholder="Username" 
             value={username} 
             setValue={setUsername} 
             secureTextEntry={false}
            />

            <CustomInput
             placeholder="Email" 
             value={email} 
             setValue={setEmail} 
             secureTextEntry={false}
            />

            <CustomInput
             placeholder="Password" 
             value={password} 
             setValue={setPassword} 
             secureTextEntry={true}
            />

            <CustomInput
             placeholder="Re-type Password" 
             value={retypePassword} 
             setValue={setReTypePassword} 
             secureTextEntry={true}
            />

            <CustomButton 
                onPress={onRegisterPressed} 
                text="Complete Registeration" 
                type="PRIMARY" 
                textType="PRIMARY"
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

});
export default Register;
