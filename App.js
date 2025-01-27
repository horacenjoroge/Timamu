import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Services from "./screens/Services";
import TherapistProfile from "./screens/TherapistProfile";
import Booking from "./screens/Booking"; // New Booking screen

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

        {/* Services Screen */}
        <Stack.Screen
          name="Services"
          component={Services}
          options={{
            headerShown: true,
            title: "Therapy Services",
          }}
        />

        {/* Therapist Profile Screen */}
        <Stack.Screen
          name="TherapistProfile"
          component={TherapistProfile}
          options={{
            headerShown: true,
            title: "Therapist Details",
          }}
        />

        {/* Booking Screen */}
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{
            headerShown: true,
            title: "Book a Session",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
