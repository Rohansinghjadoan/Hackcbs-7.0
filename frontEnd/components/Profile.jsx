import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

// Import the local image
import localImage from '../assets/images/Attendease.png';

export default function Profile() {
  return (
    <View style={styles.whiteContainer}>
      <View style={styles.flexbox}>
        <Image
          source={localImage}
          style={styles.logo}
        />
        <View style={styles.rightContainer}>
          {/* Wrap the About button with Link for navigation */}
          <Link href="/about" asChild>
            <TouchableOpacity style={styles.aboutButton}>
              <Text style={styles.aboutButtonText}>About</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/profilepage
          " asChild>
            <TouchableOpacity style={styles.icon}>
              <MaterialIcons name="account-circle" size={40} color="#2B70E4" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteContainer: {
    backgroundColor: 'white',
    height: 100, // Adjusted height to fit all content
    padding: 20,
    justifyContent: 'center',
    marginTop: 10 // Center vertically
  },
  flexbox: {
    flexDirection: 'row',
    alignItems: 'center', // Center vertically
    justifyContent: 'space-between', // Space between items
    padding: 6, // Add padding of 6
  },
  logo: {
    width: 100, // Set width to a numeric value
    height: 150, // Set height to a numeric value
    margin: 8,
    marginTop: 30, // Add margin around the image
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20 // Center vertically
  },
  icon: {
    marginLeft: 10,
  },
  aboutButton: {
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  aboutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
