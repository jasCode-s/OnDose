const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login1 from "./screens/Login1";
import Settings from "./screens/Settings";
import IPhone1460 from "./screens/IPhone1460";
import ProfileCompletedDay from "./screens/ProfileCompletedDay";
import IPhone1456 from "./screens/IPhone1456";
import IPhone1415 from "./screens/IPhone1415";
import IPhone1455 from "./screens/IPhone1455";
import IPhone1414 from "./screens/IPhone1414";
import IPhone1451 from "./screens/IPhone1451";
import IPhone1416 from "./screens/IPhone1416";
import IPhone1418 from "./screens/IPhone1418";
import IPhone1413 from "./screens/IPhone1413";
import IPhone1450 from "./screens/IPhone1450";
import IPhone145 from "./screens/IPhone145";
import IPhone146 from "./screens/IPhone146";
import IPhone1417 from "./screens/IPhone1417";
import IPhone141 from "./screens/IPhone141";
import Login4 from "./screens/Login4";
import Login3 from "./screens/Login3";
import Login5 from "./screens/Login5";
import Login2 from "./screens/Login2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { TransitionPresets } from '@react-navigation/stack';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Open Sans": require("./assets/fonts/Open_Sans.ttf"),
    "Open Sans_regular": require("./assets/fonts/Open_Sans_regular.ttf"),
    "Open Sans_semibold": require("./assets/fonts/Open_Sans_semibold.ttf"),
    "Open Sans_bold": require("./assets/fonts/Open_Sans_bold.ttf"),
    "Open Sans_bold_italic": require("./assets/fonts/Open_Sans_bold_italic.ttf"),
    "IBM Plex Sans": require("./assets/fonts/IBM_Plex_Sans.ttf"),
    "IBM Plex Sans_regular": require("./assets/fonts/IBM_Plex_Sans_regular.ttf"),
    "IBM Plex Sans_medium": require("./assets/fonts/IBM_Plex_Sans_medium.ttf"),
    "IBM Plex Sans_bold": require("./assets/fonts/IBM_Plex_Sans_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1460"
              component={IPhone1460}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileCompletedDay"
              component={ProfileCompletedDay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1456"
              component={IPhone1456}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415"
              component={IPhone1415}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1455"
              component={IPhone1455}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1414"
              component={IPhone1414}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1451"
              component={IPhone1451}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1416"
              component={IPhone1416}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1418"
              component={IPhone1418}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1413"
              component={IPhone1413}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1450"
              component={IPhone1450}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone145"
              component={IPhone145}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone146"
              component={IPhone146}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1417"
              component={IPhone1417}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone141"
              component={IPhone141}
              // options={{ headerShown: false }}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Login4"
              component={Login4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login3"
              component={Login3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login5"
              component={Login5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login2"
              component={Login2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
