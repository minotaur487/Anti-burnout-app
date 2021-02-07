// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Card, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';


export default function Plan() {
  return (
    <View style={styles.container}>
    <Header>
        <Text> aloe</Text>
      </Header>
      <CustomCardMood text="Mood" text2="Hello! How are you feeling today?">
        </CustomCardMood>
      <CustomCardSleep text="Sleep" text2="How many hours of shuteye did you get?">
      </CustomCardSleep>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const CustomCardMood = (props) =>
{
  return(
    <Card containerStyle={{padding: 20, height: 200, borderRadius:10, flexDirection: 'column'}}>
        <Card.Title>{props.text}</Card.Title>
        <View style={styles.ButtonRow}>
              <MoodButtons image={require('./1.png')}>
              </MoodButtons>
              <MoodButtons image={require('./2.png')}>
              </MoodButtons>
              <MoodButtons image={require('./3.png')}>
              </MoodButtons>
              <MoodButtons image={require('./4.png')}>
              </MoodButtons>
              <MoodButtons image={require('./5.png')}>
              </MoodButtons>
        </View>
        <Text style={{alignItems: "center", padding: 30}}>{props.text2}</Text>
    </Card>
    );
}
const func = () => {}
const MoodButtons = (props) =>
{
  return(
      <TouchableOpacity style={styles.moodIndicator} onPress={func}>
              <Image style={styles.moodIndicator} resizeMode="contain" source={props.image}/>
        </TouchableOpacity>
  );
}




const CustomCardSleep = (props) =>
{
  const [hours, setHour] = useState(0);
  const incrementHours = () => {
  if (hours < 24)
    setHour(hours + 1);
  }
  
  const decrementHours = () => {
    if (hours > 0)
      setHour(hours - 1);
  }
  return(
    <Card containerStyle={{padding: 20, height: 200, borderRadius:10, flexDirection: 'column'}}>
        <Card.Title>{props.text}</Card.Title>
        <View style={styles.SleepRow}>
            {/* <TouchableOpacity style={styles.sleepButton} onPress={decrementHours}>
            </TouchableOpacity> */}
            <Icon.Button name="left" backgroundColor='#ffffff' color='#000000' size={16} onPress={decrementHours}></Icon.Button>
            <View style={styles.hoursSlept}>
                <Text>{hours}</Text>
            </View>
            <Icon.Button name="right"  backgroundColor='#ffffff' color='#000000' size={16} onPress={incrementHours}></Icon.Button>
            {/* <TouchableOpacity style={styles.sleepButton} onPress={incrementHours}>
            </TouchableOpacity> */}
        </View>
        <Text style={{alignItems: "center", padding: 30}}>{props.text2}</Text>
    </Card>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#45a156',
    flexDirection: 'column',

  },
  ButtonRow: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent:'space-between',
  },
  moodIndicator: {
    width: 50,
    height: 50,
    borderRadius: 200,
  },
  SleepRow: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
  },
  hoursSlept: {
    width: 50,
    height: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 200,
    justifyContent:'center',
    backgroundColor: "#fff7ff",
  },
  sleepButton: {
    width: 50,
    height: 50,
    backgroundColor: "#a83258",
  }
});
