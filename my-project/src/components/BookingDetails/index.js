import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const BookingDetails = ({date,timeslot,venue, status, onPress}) => {
    return (
        // <View style={styles.container}>
            <View style={styles.bookingHolder}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{date}</Text>
                    <Text style={styles.textStyle}>{venue}</Text>
                    <Text style={styles.textStyle}>{timeslot}</Text>
                </View>
                <View style={styles.statusContainer}>
                    {
                        status == 0 ? <Text style={styles.textStyle}>Pending Approval</Text> 
                                    : status == 1 ? <Text style={styles.textStyle}>Approved</Text> 
                                                  : <Text style={styles.textStyle}>Rejected</Text> 
                    }
                    
                    <TouchableOpacity style={styles.deleteButton} onPress={onPress}>
                        <Text style={styles.textStyle}>Delete</Text>
                    </TouchableOpacity>
                </View>

            </View>    
        // </View>
    )
}

const styles= StyleSheet.create ({
    statusContainer: { 
        
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',

        paddingLeft: 20,

    },
    
    textContainer: {
       
        
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',

        paddingLeft: 20,
    },

    container: {
        backgroundColor:'#222',
        flex:1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },

    bookingHolder: {
        width: '80%',
        backgroundColor:'#222',
        borderRadius: 5,
        borderColor: 'lightblue',
        shadowColor: 'lightblue',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        elevation: 50,

        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal:40,

        
        

    
        

    },

    textStyle: {
        color: 'white',
        textAlign: 'center',

    },

    deleteButton: {
        width: 120,
        backgroundColor:'maroon',
        marginVertical: 5,
        padding: 5,
        
        
        borderRadius: 30,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        elevation: 10,
        borderWidth: 1,
    }
})

export default BookingDetails
