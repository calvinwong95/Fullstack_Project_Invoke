import React, { useState,useEffect } from 'react'
import { StyleSheet, View, Button ,ScrollView, Platform, Text , Picker, TouchableOpacity,} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking, getBookingArray, getBookedList , getApprovedBookingArray} from '../../actions';

const Booking = () => {
    const dispatch = useDispatch();
    const status = 0;

    
    //get token for page
    const loggedInUser = useSelector(state=>state.login);
    //put api data into a variable to be used
    const bookingData = useSelector(state=>state.bookingArray);
    
    

  
   
    

    //use token to get array in redux store
    useEffect(() => {
        dispatch(getBookingArray(loggedInUser.token))
        dispatch(getApprovedBookingArray(loggedInUser.token))
        
    }, [])


    //for calander
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Please Select Date');

    //for dropdownlist
    const [selectVenue, setSelectVenue] = useState("");
    const [selectTime, setSelectTime] = useState("");

    

    //array for dropdownlist
    const bookingVenue = bookingData.bookingVenue;
    // console.log(bookingVenue);

   


    const bookingTime = bookingData.bookingTimeslot;
    console.log(bookingTime);


    const onChange = (event,selectedDate) => {
        
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setShow(false);
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        

        setText(fDate );
    }

    const showMode = (currentMode) => {
        setShow(true);
        // setMode(currentMode);
    }


    const onBookingPressed = () => {
        console.warn ("Your Booking Has Been Registered");
        const data = {  token:loggedInUser.token,
                        userId:loggedInUser.id,
                        text,
                        selectVenue,
                        selectTime,
                        status
                    }
        // console.log(data)
        // console.log({'text': text})
        // console.log({'selectVenue': selectVenue})
        // console.log({'selectTime': selectTime})
        dispatch(addBooking(data));
        console.log('Booking is created');
        dispatch(getBookedList(loggedInUser));
        
    }

    // const showData = () => {{
    //     console.log(bookingData);
    // }}

    //put api approved bookings data into a variable to be used
    const approvedData = useSelector(state=>state.approvedList);

    console.log(approvedData);
    let data = Object.entries(approvedData);
    let approvedDataArray = data.map((eachArray,pops) => eachArray[1]);
 

    //get booking venue based on id
    let items = approvedDataArray.filter(item => item.bookingdate == text && item.bookingtimeslot_id == selectTime);
    console.log(items);
    const approvedVenueId = items.map((array,pops) => array.bookingvenue_id);

    // const filteredBookingVenue = bookingVenue.filter((item) => { for( let i = 0 ; i < approvedVenueId.length ; i++)
    //                                                             {  return item.id !== approvedVenueId[i]}
    //                                                            });
    
    const filteredBookingVenue = [];
     for( let i = 0 ; i < bookingVenue.length ; i++) { 
         for( let j = 0 ; j < approvedVenueId.length; j++) {
             if (bookingVenue[i].id == approvedVenueId[j]) { 
                 break;
             }

             if (j == approvedVenueId.length - 1){ //last item for approvedVenue, if yes then push it to the new array [1,2]
                filteredBookingVenue.push(bookingVenue[i]);
             }
         }
     };
          

    let completeVenue = items.length > 0 ? completeVenue =  [...filteredBookingVenue]: completeVenue = [...bookingVenue] ;

    //get booking timeslot based on id
    let items2 = approvedDataArray.filter(item => item.bookingdate == text && item.bookingvenue_id == selectVenue);
    const approvedTimeslotId = items2.map((array,pops) => array.bookingtimeslot_id);

    // const filteredBookingTimeslot = bookingTime.filter((item) => { for( let i = 0 ; i < approvedTimeslotId.length ; i++)
    //     {  return item.id !== approvedTimeslotId[i]}
    //    });

    const filteredBookingTimeslot = [];
       for( let i = 0 ; i < bookingTime.length ; i++) { 
           for( let j = 0 ; j < approvedTimeslotId.length; j++) {
               if (bookingTime[i].id == approvedTimeslotId[j]) { 
                   break;
               }
  
               if (j == approvedTimeslotId.length - 1){ //last item for approvedTimeslot, if yes then push it to the new array [1,2]
                 filteredBookingTimeslot.push(bookingTime[i]);
               }
           }
    };
    
    let completeTimeslot = items2.length > 0 ? completeTimeslot =  [...filteredBookingTimeslot]: completeTimeslot = [...bookingTime] ;


  
    console.log('complete array' ,completeVenue);

    console.log(filteredBookingVenue);
    console.log(approvedVenueId);
    console.log(text);
    console.log(selectVenue);
    console.log(selectTime);
    

return (
   
        <View style={styles.mainContainer}>
        <View>
            <TouchableOpacity>
                <Text style={styles.dateButton} onPress={()=> showMode('date')}>{text}</Text>
            </TouchableOpacity> 
            
        </View>
        

        {show && (
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            display='default'
            onChange={onChange}
            />
        )}
        <View style={styles.pickerContainer}>
        <Picker
            selectedValue={selectVenue} 
            style={styles.picker}
            onValueChange={(itemValue,itemIndex) => setSelectVenue(itemValue)}
            keyExtractor={(index) => {
                return  index.toString();
               }}
           
        >

            <Picker.Item label="Please Select Venue" value=""/>
            {completeVenue.map((item,index)=>{
                return <Picker.Item value={item.id} label={item.venue_name}/>
            })}
            
        </Picker>
        </View>
        
        <View style={styles.pickerContainer}>
        <Picker
            selectedValue={selectTime} 
            style={styles.picker}
            onValueChange={(itemValue,itemIndex) => setSelectTime(itemValue)}
            itemStyle={{textAlign:'center'}}
            keyExtractor={(index) => {
                return  index.toString();
               }}

        >
            <Picker.Item label="Please Select Timeslot" value=""/>
            {completeTimeslot.map((item,pops)=>{
                return <Picker.Item  style={{textAlign:'center'}} key={pops} value={item.id} label={item.timeslot}/>
            })}

            
            
        </Picker>
        </View>

        <CustomButton 
            onPress={()=>onBookingPressed()} 
            text="Submit Booking"
            type="PRIMARY" 
            textType="PRIMARY"
            style={{alignSelf:'center'}}

            />
        
        {/* <CustomButton 
            onPress={showData} 
            text="Show Data Array"
            type="PRIMARY" 
            textType="PRIMARY"

            /> */}
        </View>
    
)
}

const styles = StyleSheet.create ({

    mainContainer: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#222',
    },
    dateButton: {
        width: 340,
        backgroundColor:'black',
        color:'white',
        borderRadius: 30,
        borderColor: 'cyan',
        borderWidth: 1,
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: 10,

        padding: 10,
    },


    pickerContainer: {
        width: '90%',
        backgroundColor: 'black',
        borderRadius: 30,
        marginVertical: 10,
        borderColor: 'cyan',
        borderWidth: 1,
        alignSelf: 'center',
       
    },

    picker: {
        padding: 5,
        marginVertical: 10,
        backgroundColor: 'black',
        color:"white",
        textAlign: 'center'
    },
    Root: {
        alignItems: 'center',
        width:'100%',
        paddingHorizontal: 10,
    },
    Logo: {
        width: '100%',
        height: 100,
        backgroundColor: 'blue',
    },
})

export default Booking;