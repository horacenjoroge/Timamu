import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";

const TherapistProfile = ({ route, navigation }) => {
  // Get the therapist data passed via route parameters
  const { therapist } = route.params;

  // Example reviews
  const reviews = [
    { id: "1", text: "Dr. Maria is very understanding and professional!" },
    { id: "2", text: "My sessions have been life-changing. Highly recommend!" },
    { id: "3", text: "Amazing therapist who truly cares about her clients." },
  ];

  // Example session types
  const sessions = [
    { type: "30-minute session", price: "£30" },
    { type: "1-hour session", price: "£50" },
    { type: "Couples therapy (1 hour)", price: "£75" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Image */}
      <Image source={therapist.image} style={styles.image} />

      {/* Therapist Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{therapist.name}</Text>
        <Text style={styles.specialisation}>{therapist.specialisation}</Text>
        <Text style={styles.price}>{therapist.price}</Text>
        <Text style={styles.rating}>⭐ 4.8 (120 reviews)</Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionText}>
          Dr. {therapist.name} is a licensed therapist specialising in{" "}
          {therapist.specialisation}. With over 10 years of experience, they
          have helped countless clients achieve better mental health and
          emotional well-being.
        </Text>
      </View>

      {/* Qualifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Qualifications</Text>
        <Text style={styles.sectionText}>
          - PhD in Clinical Psychology{"\n"}- Certified in Cognitive Behavioral
          Therapy (CBT){"\n"}- Licensed Family Therapist
        </Text>
      </View>

      {/* Session Types Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Session Types</Text>
        {sessions.map((session, index) => (
          <View key={index} style={styles.sessionRow}>
            <Text style={styles.sessionType}>{session.type}</Text>
            <Text style={styles.sessionPrice}>{session.price}</Text>
          </View>
        ))}
      </View>

      {/* Reviews Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Client Reviews</Text>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.reviewCard}>
              <Text style={styles.reviewText}>{item.text}</Text>
            </View>
          )}
        />
      </View>

      {/* Book a Session */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Booking", { therapist })}
        accessibilityLabel={`Book a session with ${therapist.name}`}
        accessibilityHint="Navigates to the booking screen"
      >
        <Text style={styles.buttonText}>Book a Session</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Overlaps the profile image
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  specialisation: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    textAlign: "center",
  },
  rating: {
    fontSize: 14,
    color: "#333333",
    textAlign: "center",
    marginTop: 5,
  },
  section: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 22,
  },
  sessionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sessionType: {
    fontSize: 14,
    color: "#333333",
  },
  sessionPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  reviewCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  reviewText: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#50C878",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default TherapistProfile;
