import React , {useState,useEffect} from 'react'
import { View, Text, Button ,ScrollView , FlatList , RefreshControl, StyleSheet} from 'react-native'
import BookingDetails from '../../components/BookingDetails'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBooking ,getBookedList} from "../../actions/index"
import axios from 'axios';



const Dashboard = () => {

    const URL =  "http://4bad-49-124-200-218.ngrok.io";
    
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    
    const [refreshing, setRefreshing] = React.useState(false);
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

    // const getBookedList = (data) => {
    //     axios.get(`${URL}/joinedData`,{
    //         headers: {
    //             Authorization: 'Bearer ' +data,
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json',
    //         }
    //         })
    //         .then(res => {
    //             // console.log(res.data);
    //             setArrayList(res.data);
                
    //         })
    //         .catch(error => {
    //         console.log('Something wrong with retrieving booked data from API', error);
    //         })

       
    // }
    



    //above is new
   

    
    const loggedInUser = useSelector(state=>state.login);
    const arrayList = useSelector(state => state.bookedList);

    console.log(loggedInUser);

    
        
    

    useEffect(() => {
        // console.log(loggedInUser.token);
        dispatch(getBookedList(loggedInUser));

        
        
    }, []);

    const dispatch = useDispatch();

    //get token from redux store 
    
    // console.log(loggedInUser)

    //get bookedList from api to store in a variable to be used
    


    
    

    const onDelete = (data)  => {
        const token = loggedInUser.token;
        console.log(loggedInUser);
        
        // dispatch(deleteBooking({token:loggedInUser.token,
        //                         id}));

        axios.delete(`${URL}/api/delete/${data.id}`,{
            headers: {
                Authorization: 'Bearer ' +token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
            })
            .then(res => {
                console.log(res.data);
                dispatch(getBookedList(loggedInUser));
                })
                
           
            
            .catch(error => {
            console.log('Something wrong with deleting data from API', error);
            })
    }


    return (
        // <ScrollView  }>
            // {/* put in flatlist */}
            <View style={styles.container}>
             <FlatList 
                // contentContainerStyle={{ height:"10%", alignItems:"center"}}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                data = {arrayList}
                keyextractor={(item,index) => {
                    return  index.toString();
                   }}
                renderItem={({ item, index }) => (
                    <BookingDetails 
                        key={index}
                        venue = {item.venue_name}
                        timeslot = {item.timeslot}
                        date = {item.bookingdate}
                        status = {item.booking_status}
                        onPress = {()=>onDelete(item)}/>
                        
                        
                )}
            />
            </View>

            // {/* end of flatlist */}
            // {/* <BookingDetails 
            //     venue = {bookingDetails[0].data.selectVenue}
            //     timeslot = {bookingDetails[0].data.selectTime}
            //     date = {bookingDetails[0].data.text}/> */}
        // </ScrollView>
    )
}

export default Dashboard;

const styles= StyleSheet.create ({
    container: { 
        
        height: '100%',

        backgroundColor: '#222',

    }
});