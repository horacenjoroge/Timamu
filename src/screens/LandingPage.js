import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
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
          <Image
            source={require("../assets/images/hero-smile.jpg")}
            style={styles.heroImage}
          />
          <Text style={styles.heroTitle}>You MATTER!</Text>
          <Text style={styles.heroSubtitle}>
            Your Journey to Better Mental Health Starts Here
          </Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        {/* Services Section */}
        <View style={styles.services}>
          <Text style={styles.sectionTitle}>
            What kind of mental health help are you looking for?
          </Text>
          <View style={styles.serviceCards}>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/adult-icon.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Individual Therapy</Text>
              <Text style={styles.cardText}>
                Personalised one-on-one sessions.
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/family-icon.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Family Therapy</Text>
              <Text style={styles.cardText}>
                Resolving family challenges together.
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/teen-icon.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Teen Therapy</Text>
              <Text style={styles.cardText}>
                Specialised care for teenagers.
              </Text>
            </View>
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

        {/* Payment Options Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Insurance & Payment Options</Text>
          <Text style={styles.sectionText}>
            We accept major insurance providers and offer flexible payment
            options including pay-as-you-go and subscription models.
          </Text>
        </View>

        {/* Therapists Section */}
        <View style={styles.therapists}>
          <Text style={styles.sectionTitle}>
            Meet Some of Our Licensed Therapists
          </Text>
          <FlatList
            data={therapists}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.therapistCard}>
                <Image source={item.image} style={styles.therapistImage} />
                <Text style={styles.therapistName}>{item.name}</Text>
                <Text style={styles.therapistTitle}>{item.title}</Text>
              </View>
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
    alignItems: "center",
    backgroundColor: "#4A90E2",
    padding: 20,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  heroTitle: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginVertical: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
  heroButton: {
    backgroundColor: "#50C878",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  heroButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
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
  sectionText: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 22,
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
  testimonialText: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
  },
  therapists: {
    padding: 20,
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
