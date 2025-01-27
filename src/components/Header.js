import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Header = ({ isLoggedIn, navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const animation = new Animated.Value(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    Animated.timing(animation, {
      toValue: menuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const menuHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Adjust height as per your menu items
  });

  return (
    <View>
      {/* Main Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>TIMAMU</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerIcon}>
            <MaterialIcons name="menu" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () =>
                isLoggedIn
                  ? navigation.navigate("Profile") // Navigate to Profile screen if logged in
                  : navigation.navigate("Login") // Navigate to Login/Sign-Up screen if not logged in
            }
            style={styles.profileIcon}
          >
            <FontAwesome name="user-circle" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown Menu */}
      <Animated.View style={[styles.menu, { height: menuHeight }]}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>About</Text>
        <Text style={styles.menuItem}>Services</Text>
        <Text style={styles.menuItem}>Resources</Text>
        <Text style={styles.menuItem}>Emergency Contacts</Text>
        <Text style={styles.menuItem}>FAQs</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4A90E2",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  hamburgerIcon: {
    marginRight: 15,
  },
  profileIcon: {
    padding: 5,
  },
  menu: {
    overflow: "hidden",
    backgroundColor: "#4A90E2",
    paddingHorizontal: 20,
  },
  menuItem: {
    fontSize: 16,
    color: "#FFFFFF",
    marginVertical: 5,
  },
});

export default Header;
