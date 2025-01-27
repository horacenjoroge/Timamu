import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const Booking = ({ route, navigation }) => {
  const { therapist } = route.params;

  // State for session type, date, time slot, and meeting mode
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [meetingMode, setMeetingMode] = useState(null);

  // Sample session types, time slots, and meeting modes
  const sessionTypes = [
    { id: "1", type: "30-minute session", price: "KES 2500" },
    { id: "2", type: "1-hour session", price: "KES 4500" },
    { id: "3", type: "Couples therapy (1 hour)", price: "KES 8000" },
  ];

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM",
  ];

  const meetingModes = ["Teams", "Google Meet", "Physical Meet"];

  // Handle booking confirmation
  const handleConfirmBooking = () => {
    if (
      !selectedSession ||
      !selectedDate ||
      !selectedTimeSlot ||
      !meetingMode
    ) {
      Alert.alert(
        "Incomplete Booking",
        "Please select all options (session type, date, time slot, and meeting mode) before proceeding."
      );
      return;
    }

    Alert.alert(
      "Booking Confirmed",
      `You have booked a ${selectedSession.type} with ${
        therapist.name
      } on ${selectedDate.toDateString()} at ${selectedTimeSlot} via ${meetingMode}.`
    );

    // Navigate back or to a success page
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Therapist Information */}
      <Text style={styles.title}>Booking with {therapist.name}</Text>
      <Text style={styles.subtitle}>{therapist.specialisation}</Text>

      {/* Session Type Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Session Type</Text>
        <FlatList
          data={sessionTypes}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.sessionCard,
                selectedSession?.id === item.id && styles.selectedCard,
              ]}
              onPress={() => setSelectedSession(item)}
            >
              <Text style={styles.sessionType}>{item.type}</Text>
              <Text style={styles.sessionPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Date Picker */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Date</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.datePickerText}>
            {selectedDate.toDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setSelectedDate(date);
            }}
          />
        )}
      </View>

      {/* Time Slot Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Time Slot</Text>
        <FlatList
          data={timeSlots}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.timeSlotCard,
                selectedTimeSlot === item && styles.selectedCard,
              ]}
              onPress={() => setSelectedTimeSlot(item)}
            >
              <Text
                style={[
                  styles.timeSlotText,
                  selectedTimeSlot === item && styles.selectedTimeSlotText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Meeting Mode Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Meeting Mode</Text>
        <FlatList
          data={meetingModes}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.meetingModeCard,
                meetingMode === item && styles.selectedCard,
              ]}
              onPress={() => setMeetingMode(item)}
            >
              <Text
                style={[
                  styles.meetingModeText,
                  meetingMode === item && styles.selectedMeetingModeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Confirm Booking Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmBooking}
      >
        <Text style={styles.confirmButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  sessionCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  selectedCard: {
    borderColor: "#4A90E2",
    borderWidth: 2,
  },
  sessionType: {
    fontSize: 14,
    color: "#333333",
  },
  sessionPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 5,
  },
  datePickerButton: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    alignItems: "center",
  },
  datePickerText: {
    fontSize: 16,
    color: "#333333",
  },
  timeSlotCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    alignItems: "center",
  },
  selectedTimeSlotText: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  timeSlotText: {
    fontSize: 14,
    color: "#333333",
  },
  meetingModeCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    alignItems: "center",
  },
  selectedMeetingModeText: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  meetingModeText: {
    fontSize: 14,
    color: "#333333",
  },
  confirmButton: {
    backgroundColor: "#50C878",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default Booking;
