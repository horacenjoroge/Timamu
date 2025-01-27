import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Linking,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const books = [
  {
    id: "1",
    title: "The Happiness Trap",
    author: "Dr. Russ Harris",
    description:
      "Learn to stop struggling and start living with this self-help guide.",
    link: "https://www.amazon.com/Happiness-Trap-Struggling-Start-Living/dp/1590305841",
  },
  {
    id: "2",
    title: "Feeling Good: The New Mood Therapy",
    author: "Dr. David D. Burns",
    description: "A proven drug-free treatment for depression and anxiety.",
    link: "https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380810336",
  },
];

const youtubeVideos = [
  {
    id: "1",
    title: "How to Make Stress Your Friend",
    channel: "TED",
    link: "https://www.youtube.com/watch?v=RcGyVTAoXEU",
  },
  {
    id: "2",
    title: "The Power of Vulnerability",
    channel: "TEDxHouston",
    link: "https://www.youtube.com/watch?v=iCvmsMzlF7o",
  },
];

const socialEvents = [
  {
    id: "1",
    title: "Nature Hike at Karura Forest",
    date: "10th February 2025",
    location: "Karura Forest, Nairobi, Kenya",
    description:
      "Reconnect with nature and relieve stress on this peaceful hike.",
    price: "KES 1,500",
    link: "https://example.com/register-karura-hike",
  },
  {
    id: "2",
    title: "Yoga for Mental Wellness",
    date: "17th February 2025",
    location: "Ngong Hills, Kenya",
    description: "A rejuvenating yoga session to help you unwind and recharge.",
    price: "KES 2,000",
    link: "https://example.com/register-yoga",
  },
  {
    id: "3",
    title: "Free Street Cleaning Initiative",
    date: "24th February 2025",
    location: "City Centre, Nairobi, Kenya",
    description:
      "Join us in cleaning the streets and making our city a better place.",
    price: "Free",
    link: "https://example.com/register-cleaning",
  },
  {
    id: "4",
    title: "Mental Health Awareness Walk",
    date: "3rd March 2025",
    location: "Uhuru Park, Nairobi, Kenya",
    description:
      "Walk to raise awareness about mental health and support the community.",
    price: "KES 500",
    link: "https://example.com/register-awareness-walk",
  },
  {
    id: "5",
    title: "Community Planting Drive",
    date: "10th March 2025",
    location: "Thika Road, Kenya",
    description: "Plant trees with us and contribute to a greener environment.",
    price: "Free",
    link: "https://example.com/register-planting",
  },
];

const Resources = () => {
  const renderSection = (title, data) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => Linking.openURL(item.link)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            {item.author && (
              <Text style={styles.cardAuthor}>by {item.author}</Text>
            )}
            {item.channel && (
              <Text style={styles.cardAuthor}>Channel: {item.channel}</Text>
            )}
            {item.date && (
              <Text style={styles.cardDetails}>
                {item.date} - {item.location}
              </Text>
            )}
            <Text style={styles.cardDescription}>{item.description}</Text>
            {item.price && (
              <Text style={styles.cardPrice}>Price: {item.price}</Text>
            )}
            <Text style={styles.cardLink}>Learn More</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {renderSection("Books", books)}
        {renderSection("YouTube Videos", youtubeVideos)}
        {renderSection("Social Events", socialEvents)}
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardAuthor: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 5,
  },
  cardLink: {
    fontSize: 14,
    color: "#4A90E2",
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default Resources;
