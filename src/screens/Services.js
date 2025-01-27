import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";

const Services = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState(null);

  // Sample therapist data
  const therapists = [
    {
      id: "1",
      name: "Dr. Maria Jones",
      specialisation: "Anxiety & Depression",
      price: 5000,
      rating: 4.8,
      reviews: 120,
      availability: "Available Now",
      image: require("../assets/images/therapist1.jpg"),
    },
    {
      id: "2",
      name: "John Smith",
      specialisation: "Family Therapy",
      price: 6000,
      rating: 4.5,
      reviews: 95,
      availability: "Next Available: Tomorrow at 10 AM",
      image: require("../assets/images/therapist2.jpg"),
    },
    {
      id: "3",
      name: "Clara Owen",
      specialisation: "Teen Counselling",
      price: 4000,
      rating: 4.9,
      reviews: 150,
      availability: "Available Now",
      image: require("../assets/images/therapist3.jpg"),
    },
  ];

  // Apply Filters
  const filteredTherapists = therapists
    .filter((therapist) => {
      const matchesCategory =
        !selectedCategory || therapist.specialisation === selectedCategory;
      const matchesSearch =
        therapist.specialisation
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        therapist.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesPrice =
        !priceRange ||
        (therapist.price >= priceRange[0] && therapist.price <= priceRange[1]);
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      if (sortOption === "priceAsc") return a.price - b.price;
      if (sortOption === "priceDesc") return b.price - a.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0; // Default sort
    });

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Take the First Step</Text>
        <Text style={styles.heroSubtitle}>
          Your mental health journey starts here.
        </Text>
      </View>

      {/* Filter and Sort Options */}
      <View style={styles.filters}>
        <Text style={styles.sectionTitle}>Filter and Sort</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            "All",
            "Anxiety & Depression",
            "Family Therapy",
            "Teen Counselling",
          ].map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterButton,
                selectedCategory === category && styles.selectedFilter,
              ]}
              onPress={() =>
                setSelectedCategory(category === "All" ? "" : category)
              }
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCategory === category && styles.selectedFilterText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.filterButton}
            onPress={
              () => setPriceRange(priceRange ? null : [4000, 6000]) // Toggle price range filter
            }
          >
            <Text
              style={[
                styles.filterText,
                priceRange && styles.selectedFilterText,
              ]}
            >
              KES 4000–6000
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.sortOptions}>
          <TouchableOpacity
            onPress={() => setSortOption("priceAsc")}
            style={[
              styles.sortButton,
              sortOption === "priceAsc" && styles.selectedSort,
            ]}
          >
            <Text>Sort by Price (Low-High)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSortOption("priceDesc")}
            style={[
              styles.sortButton,
              sortOption === "priceDesc" && styles.selectedSort,
            ]}
          >
            <Text>Sort by Price (High-Low)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSortOption("rating")}
            style={[
              styles.sortButton,
              sortOption === "rating" && styles.selectedSort,
            ]}
          >
            <Text>Sort by Rating</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured Therapists */}
      <View style={styles.featured}>
        <Text style={styles.sectionTitle}>Featured Therapists</Text>
        <FlatList
          data={therapists.slice(0, 2)} // Show only top 2 therapists
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.featuredCard}
              onPress={() =>
                navigation.navigate("TherapistProfile", { therapist: item })
              }
            >
              <Image source={item.image} style={styles.featuredImage} />
              <Text style={styles.featuredName}>{item.name}</Text>
              <Text style={styles.featuredSpecialisation}>
                {item.specialisation}
              </Text>
              <Text style={styles.featuredPrice}>
                KES {item.price.toLocaleString()}
              </Text>
              <Text style={styles.featuredAvailability}>
                {item.availability}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Browse All Therapists */}
      <View style={styles.browse}>
        <Text style={styles.sectionTitle}>Browse All Therapists</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or specialisation..."
          placeholderTextColor="#999"
          onChangeText={(text) => setSearchText(text)}
        />
        {filteredTherapists.length === 0 ? (
          <Text style={styles.noResultsText}>
            No therapists found. Try different filters or search criteria.
          </Text>
        ) : (
          filteredTherapists.map((therapist) => (
            <TouchableOpacity
              key={therapist.id}
              style={styles.browseCard}
              onPress={() =>
                navigation.navigate("TherapistProfile", { therapist })
              }
            >
              <Image source={therapist.image} style={styles.browseImage} />
              <View style={styles.browseContent}>
                <Text style={styles.browseName}>{therapist.name}</Text>
                <Text style={styles.browseSpecialisation}>
                  {therapist.specialisation}
                </Text>
                <Text style={styles.browsePrice}>
                  KES {therapist.price.toLocaleString()}
                </Text>
                <Text style={styles.browseAvailability}>
                  {therapist.availability}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  hero: {
    backgroundColor: "#4A90E2",
    padding: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  categories: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  categoryCard: {
    backgroundColor: "#FFDD57",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  selectedCategoryCard: {
    backgroundColor: "#4A90E2",
  },
  categoryText: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedCategoryText: {
    color: "#FFFFFF",
  },
  featured: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  featuredCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: "center",
  },
  featuredImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  featuredName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  featuredSpecialisation: {
    fontSize: 14,
    color: "#555555",
    marginVertical: 5,
  },
  featuredPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  browse: {
    paddingHorizontal: 20,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginBottom: 15,
  },
  browseCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  browseImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  browseContent: {
    flex: 1,
  },
  browseName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  browseSpecialisation: {
    fontSize: 14,
    color: "#555555",
    marginVertical: 5,
  },
  browsePrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4A90E2",
  },
});

export default Services;
