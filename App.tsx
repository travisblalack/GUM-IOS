
import * as React from 'react';
import 'react-native-gesture-handler';
import Main from './ios/GUM/src/components/images/Main.js';
import Home from './ios/GUM/src/components/images/Home.js';
import StartMoving from './ios/GUM/src/components/images/StartMoving.js';
import SignUp from './ios/GUM/src/components/images/SignUp.js';
import UpdateSchedule from './ios/GUM/src/components/images/UpdateSchedule.js'
import CurrentTeams from './ios/GUM/src/components/images/CurrentTeams.js'
import Teams from './ios/GUM/src/components/images/Teams.js';
import JoinTeam from './ios/GUM/src/components/images/JoinTeam.js';
import CreateTeams from './ios/GUM/src/components/images/CreateTeams.js';
import AboutTeams from './ios/GUM/src/components/images/AboutTeams.js';
import TeachingDemos from './ios/GUM/src/components/images/TeachingDemos.js';
import ThreeDots from './ios/GUM/src/components/images/ThreeDots.js';
import EasyVideos from './ios/GUM/src/components/images/EasyVideos.js';
import ModerateVideos from './ios/GUM/src/components/images/ModerateVideos.js';
import VigorousVideos from './ios/GUM/src/components/images/VigorousVideos.js';
import L1S1 from './ios/GUM/src/components/images/L1S1.js';
import L1S2 from './ios/GUM/src/components/images/L1S2.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageButton from './ios/GUM/src/components/images/ImageButton.js';
import {StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  Image,
  useColorScheme
} from 'react-native'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="StartMoving" component={StartMoving}/>
        <Stack.Screen name="Teams" component={Teams}/>
        <Stack.Screen name="TeachingDemos" component={TeachingDemos}/>
        <Stack.Screen name="UpdateSchedule" component={UpdateSchedule}/>
        <Stack.Screen name="JoinTeam" component={JoinTeam}/>
        <Stack.Screen name="CurrentTeams" component={CurrentTeams}/>
        <Stack.Screen name="CreateTeams" component={CreateTeams}/>
        <Stack.Screen name="AboutTeams"  component={AboutTeams}/>
        <Stack.Screen name="ThreeDots" component={ThreeDots}/>
        <Stack.Screen name="EasyVideos" component={EasyVideos}/>
        <Stack.Screen name="ModerateVideos" component={ModerateVideos}/>
        <Stack.Screen name="VigorousVideos" component={VigorousVideos}/>
        <Stack.Screen name="L1S1" component={L1S1}/>
        <Stack.Screen name="L1S2" component={L1S2}/>
        <Stack.Screen name="ImageButton" component={ImageButton}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});export default App

