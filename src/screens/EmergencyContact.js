import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
  Alert,
  Image,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const emergencyContacts = [
  {
    id: "1",
    category: "General Emergency",
    name: "Police, Fire, Ambulance",
    number: "999",
    description: "For immediate assistance in emergencies.",
    icon: require("../assets/icons/police.png"),
  },
  {
    id: "2",
    category: "General Emergency",
    name: "Police, Fire, Ambulance (Mobile Networks)",
    number: "112",
    description: "Use this number for emergencies on mobile networks.",
    icon: require("../assets/icons/police.png"),
  },
  {
    id: "3",
    category: "General Emergency",
    name: "Kenya Red Cross Emergency",
    number: "1199",
    description: "Support during crises and emergencies.",
    icon: require("../assets/icons/red-cross.png"),
  },
  {
    id: "4",
    category: "Child Protection",
    name: "Childline Kenya (Child Abuse)",
    number: "116",
    description:
      "Toll-free helpline for reporting and addressing child abuse cases.",
    icon: require("../assets/icons/child.png"),
  },
  {
    id: "5",
    category: "Gender-Based Violence",
    name: "Gender-Based Violence Hotline",
    number: "1195",
    description: "Support for victims of gender-based violence.",
    icon: require("../assets/icons/gender-violence.png"),
  },
  {
    id: "6",
    category: "Substance Abuse",
    name: "NACADA (Substance Abuse)",
    number: "1192",
    description:
      "Help for individuals dealing with substance abuse and addiction.",
    icon: require("../assets/icons/substance-abuse.png"),
  },
  {
    id: "7",
    category: "Mental Health",
    name: "Befrienders Kenya (Suicide Prevention)",
    number: "+254 722 178177",
    description:
      "Provides emotional support and help for individuals in distress.",
    icon: require("../assets/icons/mental-health.png"),
  },
  {
    id: "8",
    category: "Mental Health",
    name: "Emergency Medicine Kenya Foundation (Suicide Prevention)",
    number: "0800 723 253",
    description: "Toll-free number for suicide prevention and crisis support.",
    icon: require("../assets/icons/mental-health.png"),
  },
  {
    id: "9",
    category: "Mental Health",
    name: "Mathari National Teaching and Referral Hospital",
    number: "0713 699715",
    description:
      "Kenya’s largest psychiatric hospital offering mental health services.",
    icon: require("../assets/icons/hospital.png"),
  },
  {
    id: "10",
    category: "Counseling Services",
    name: "Niskize (Counseling Services)",
    number: "0900 620 800",
    description: "Affordable and professional counseling services.",
    icon: require("../assets/icons/counseling.png"),
  },
];

const EmergencyContactScreen = () => {
  const [searchText, setSearchText] = useState("");

  // Filter contacts based on search text
  const filteredContacts = emergencyContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => Linking.openURL(`tel:${item.number}`)}
      accessibilityLabel={`Call ${item.name}`}
      accessibilityHint={`Dial ${item.number} for assistance`}
    >
      <Image source={item.icon} style={styles.contactIcon} />
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.number}</Text>
      </View>
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => Alert.alert(item.name, item.description)}
      >
        <Text style={styles.infoButtonText}>i</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Image
            source={require("../assets/images/helping-hands.png")}
            style={styles.heroImage}
          />
          <Text style={styles.heroTitle}>You're Not Alone</Text>
          <Text style={styles.heroSubtitle}>
            Find the right help at the right time. Search for emergency contacts
            and get assistance immediately.
          </Text>
        </View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search contacts..."
          placeholderTextColor="#999"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          accessibilityLabel="Search for emergency contacts"
        />

        {/* Categorised Contacts */}
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        <FlatList
          data={filteredContacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  hero: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  heroImage: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 22,
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
  },
  contactItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    alignItems: "center",
  },
  contactIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  contactNumber: {
    fontSize: 16,
    color: "#555555",
    marginTop: 5,
  },
  infoButton: {
    backgroundColor: "#50C878",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  infoButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EmergencyContactScreen;
