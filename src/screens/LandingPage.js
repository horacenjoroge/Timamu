import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = ({ navigation }) => {
  // Therapist Profiles
  const therapists = [
    {
      id: "1",
      name: "Maria Jones",
      title: "Licensed Therapist",
      image: require("../assets/images/therapist1.jpg"),
    },
    {
      id: "2",
      name: "John Smith",
      title: "Licensed Therapist",
      image: require("../assets/images/therapist2.jpg"),
    },
    {
      id: "3",
      name: "Clara Owen",
      title: "Licensed Therapist",
      image: require("../assets/images/therapist3.jpg"),
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: "1",
      text: "Timamu helped me find the right therapist for my needs!",
    },
    { id: "2", text: "Affordable and professional mental health services." },
    { id: "3", text: "Highly recommend Timamu to anyone seeking therapy." },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <View style={styles.hero}>
          <ImageBackground
            source={require("../assets/images/hero-background.jpg")}
            style={styles.heroBackground}
          >
            <Animated.View
              entering={FadeIn.duration(500)}
              exiting={FadeOut.duration(500)}
            >
              <Text style={styles.heroTitle}>You MATTER!</Text>
              <Text style={styles.heroSubtitle}>
                Your Journey to Better Mental Health Starts Here
              </Text>
            </Animated.View>
            <TouchableOpacity
              style={styles.heroButton}
              onPress={() => navigation.navigate("Services")}
              accessibilityLabel="Find a Therapist Button"
              accessibilityHint="Navigates to the services screen"
            >
              <Text style={styles.heroButtonText}>Find a Therapist</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* Services Section */}
        <View style={styles.services}>
          <Text style={styles.sectionTitle}>
            What kind of mental health help are you looking for?
          </Text>
          <View style={styles.serviceCards}>
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Services", {
                  filter: "Individual Therapy",
                })
              }
            >
              <Image
                source={require("../assets/images/adult-icon.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Individual Therapy</Text>
              <Text style={styles.cardText}>
                Personalised one-on-one sessions.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Services", { filter: "Family Therapy" })
              }
            >
              <Image
                source={require("../assets/images/family-icon.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Family Therapy</Text>
              <Text style={styles.cardText}>
                Resolving family challenges together.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Services", { filter: "Teen Therapy" })
              }
            >
              <Image
                source={require("../assets/images/teen-icon.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Teen Therapy</Text>
              <Text style={styles.cardText}>
                Specialised care for teenagers.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Approach Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Approach to Mental Health</Text>
          <Text style={styles.sectionText}>
            TIMAMU is committed to making mental health care accessible,
            affordable, and personalised for everyone.
          </Text>
        </View>

        {/* Testimonials Section */}
        <View style={styles.testimonials}>
          <Text style={styles.sectionTitle}>What Our Clients Say</Text>
          {testimonials.map((testimonial) => (
            <View key={testimonial.id} style={styles.testimonialCard}>
              <Text style={styles.testimonialText}>{testimonial.text}</Text>
            </View>
          ))}
        </View>

        {/* Therapists Section */}
        <View style={styles.therapists}>
          <View style={styles.therapistsHeader}>
            <Text style={styles.sectionTitle}>
              Meet Some of Our Licensed Therapists
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Services")}
              accessibilityLabel="View All Therapists"
            >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={therapists}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TherapistProfile", { therapist: item })
                }
                style={styles.therapistCard}
              >
                <Image source={item.image} style={styles.therapistImage} />
                <Text style={styles.therapistName}>{item.name}</Text>
                <Text style={styles.therapistTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Footer */}
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  hero: {
    height: 300,
    position: "relative",
  },
  heroBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  heroButton: {
    backgroundColor: "#50C878",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  heroButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  services: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
  },
  serviceCards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    width: "30%",
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
    color: "#333333",
  },
  section: {
    padding: 20,
  },
  testimonials: {
    padding: 20,
    backgroundColor: "#F9F9F9",
  },
  testimonialCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  therapists: {
    padding: 20,
  },
  therapistsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  viewAllText: {
    color: "#4A90E2",
    fontSize: 16,
    fontWeight: "bold",
  },
  therapistCard: {
    alignItems: "center",
    marginRight: 15,
  },
  therapistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  therapistName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  therapistTitle: {
    fontSize: 14,
    color: "#555555",
  },
});

export default LandingPage;
