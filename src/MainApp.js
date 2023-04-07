import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from './theme';

import Reminders from './screens/Reminders';
import MyMedications from './screens/MyMedications';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import CustomHeaderWithImage from './components/CustomHeaderWithImage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SettingsStack = createStackNavigator();

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen
        name="Setting here"
        component={Settings}
      />
    </SettingsStack.Navigator>
  );
}

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnDose"
          options={({ navigation }) => ({
            header: () => <CustomHeaderWithImage navigation={navigation} headerImage={require('../assets/OnDose.png')} />,
            headerShown: true,
          })}
        >
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  if (route.name === 'Reminder') {
                    iconName = 'bell';
                  } else if (route.name === 'MyMedications') {
                    iconName = 'pills';
                  } else if (route.name === 'Settings') {
                    iconName = 'cog';
                  }
                  return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary_focused,
                tabBarInactiveTintColor: theme.colors.grey,
                tabBarStyle: styles.tabBar,
                headerShown: false,
              })}
            >
              <Tab.Screen name="Reminder" component={Reminders} />
              <Tab.Screen name="MyMedications" component={MyMedications} />
              <Tab.Screen
                name="Settings"
                component={SettingsStackNavigator}
              />

            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={Profile}
          theme={theme}
          options={({ navigation }) => ({
            header: () => <CustomHeaderWithImage navigation={navigation} headerImage={require('../assets/OnDose.png')} showBackButton={true} />,
            headerShown: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    paddingTop:10,
    paddingBottom: 25,
    backgroundColor: theme.colors.primary
  },
});
export default MainApp;
