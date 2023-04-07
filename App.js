import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './src/AuthContext';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import SignUpSuccess from './src/screens/SignUpSuccess';
import MainApp from './src/MainApp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppContent = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const ScreenStack = createStackNavigator();

  const ScreenStackScreen = () => (
    <NavigationContainer>
      <ScreenStack.Navigator screenOptions={{headerShown: false}}>
      <ScreenStack.Screen name="Login" component={Login} />
      <ScreenStack.Screen name="SignUp" component={SignUp} />
      <ScreenStack.Screen name="SignUpSuccess" component={SignUpSuccess} />
    </ScreenStack.Navigator>
    </NavigationContainer>
  );

  if (!isAuthenticated) {
    return (
        <ScreenStackScreen />
    );
  }

  return <MainApp />;
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
