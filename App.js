import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,TouchableOpacity,handlePress ,lineargradient, Pressable} from 'react-native';
import { router } from 'expo-router';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Pages/Home';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  
   function logout() {
    router.replace('/login');
}
  
  return (
    <Home/>
  );
}


