import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// If you want to add a detail screen, (ex tracker, levels) make sure to first input it here
import Home from './components/home/home';
import Onboarding from './components/onboarding/Onboarding';
import PlanDetails from './components/plan/planDetails';

const AppStack = createStackNavigator();

// next add it as a AppStack Screen here
// look at detail Tester for more directions

// MAKE SURE NOT TO ADD THE BASE VIEW(ex plan or track) HERE!
// THIS WILL MESS UP THE NAVIGATION OF THE HOME VIEW
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={Onboarding} />
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="PlanDetails" component={PlanDetails} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}
