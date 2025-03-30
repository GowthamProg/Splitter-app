import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert, Modal } from 'react-native';
import { StyleSheet } from 'react-native';

// Firebase Database URL (Replace with your actual Firebase database URL)
const FIREBASE_DB_URL = "https://expensesplitter-app-default-rtdb.asia-southeast1.firebasedatabase.app/friends.json";

const FreindScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [friendName, setFriendName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Function to handle submit
  const handleSubmit = async () => {
    if (!friendName || !mobileNumber) {
      Alert.alert("Error", "Please fill all fields!");
      return;
    }

    const newFriend = { name: friendName, mobile: mobileNumber };

    try {
      const response = await fetch(FIREBASE_DB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFriend),
      });

      if (response.ok) {
        Alert.alert("Success", "Friend added successfully!");
        setFriendName('');
        setMobileNumber('');
        setModalVisible(false);
      } else {
        Alert.alert("Error", "Failed to add friend. Try again!");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome members! 🎉</Text>

      {/* Add Friend Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Add Friend</Text>
      </TouchableOpacity>

      {/* Modal Form */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a New Friend</Text>

            {/* Friend Name Input */}
            <TextInput
              style={styles.input}
              placeholder="Friend Name"
              value={friendName}
              onChangeText={setFriendName}
            />

            {/* Mobile Number Input */}
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FreindScreen;


























const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
});
