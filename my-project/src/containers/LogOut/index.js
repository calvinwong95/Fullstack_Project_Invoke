import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import CustomButton from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions';

const Logout = ({navigation}) => {

    const dispatch = useDispatch();
    const logoutInfo = useSelector(state=>state.login);

    const toLogInPage = () => {
        dispatch(logoutUser(logoutInfo.token))
        console.log(logoutInfo);
        console.warn('Signing Out');
        navigation.navigate('Welcome');
       
    }
    return (
        <ScrollView >
            <View style={styles.container}>
            <Text style={{color: 'white'}}>Are you sure you want to log out?</Text>
            <CustomButton
                onPress={toLogInPage} 
                text="Log Out"
                type="LOGOUT" 
                textType="PRIMARY"
            />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {

        backgroundColor: '#222',
        flex: 1,
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        paddingVertical: 300,
        paddingHorizontal: 10,
    },
    
})

export default Logout;
