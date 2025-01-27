import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

const App = () => {
  // Simulate login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        {/* Landing Page */}
        <Stack.Screen name="LandingPage" options={{ headerShown: false }}>
          {(props) => <LandingPage {...props} isLoggedIn={isLoggedIn} />}
        </Stack.Screen>

        {/* Login/Sign-Up Screen */}
        <Stack.Screen
          name="Login"
          options={{
            headerShown: true,
            title: "Login/Sign-Up",
          }}
        >
          {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>

        {/* Profile Screen */}
        <Stack.Screen
          name="Profile"
          options={{
            headerShown: true,
            title: "My Profile",
          }}
        >
          {(props) => <Profile {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
