import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function SleepSummary() {
    return (
      <View>
        <View style='data'>
          <Text>
            Sleep
          </Text>
        </View>
        <View style='row'>
          <Button style='button'>
            <Text>Week</Text>
          </Button>
          <Button style='button'>
            <Text>Month</Text>
          </Button>
          <Button style='button'>
            <Text>Year</Text>
          </Button>
        </View>
        <View style='messages'>

        </View>
      </View>
    );
  }

  const displayWeek = () => {}
  const displayMonth = () => {}
  const displayYear = () => {}

  const styles = StyleSheet.create(
  {
    scaffold: {
      height: 200,
      width: 150,
    },
    data: {
      flex: 60,
      color: '#a6a6a6',
    },
    messages: {
      flex: 10,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    row: {
      flex: 30,
      color: '#6b6b6b',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });