import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        TIMAMU - Your journey to better mental health starts here.
      </Text>
      <View style={styles.footerLinks}>
        <Text style={styles.link}>Home</Text>
        <Text style={styles.link}>About</Text>
        <Text style={styles.link}>Services</Text>
        <Text style={styles.link}>Contact</Text>
      </View>
      <Text style={styles.copyright}>© 2025 TIMAMU. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#4A90E2",
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
  },
  footerLinks: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 10,
  },
  link: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  copyright: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});

export default Footer;
