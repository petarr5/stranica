import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons'; // Ensure correct import
import LoggedInView from './LoggedInView';
import GamesScreen from './GamesScreen';
import GameOneScreen from './GameOneScreen';

const Tab = createBottomTabNavigator();

export default function LoggedInTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Define icons based on the route name
          if (route.name === 'Profil') {
            iconName = 'person'; // Icon name from MaterialIcons
          } else if (route.name === 'Igrice') {
            iconName = 'gamepad'; // Icon name from MaterialIcons
          } else if (route.name === 'GameOne') {
            iconName = 'calculate'; // Icon name from MaterialIcons
          }

          // Return the icon component with correct size and color
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'navy', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
        tabBarLabelStyle: {
          fontSize: 14, // Optional: Style the text labels of the tabs
        },
      })}
    >
      <Tab.Screen name="GameOne" component={GameOneScreen} />
      <Tab.Screen name="Profil" component={LoggedInView} />
      <Tab.Screen name="Igrice" component={GamesScreen} />
    </Tab.Navigator>
  );
}
