import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Import the Profile component to include the navbar
import Profile from '../../components/Profile';  // Adjust the import path if needed

// Sample user name
const userName = "John Doe";

export default function Account() {
  return (
    <>
      {/* Profile (Navbar) Section */}
      <Profile />

      {/* Main Content */}
      <View style={styles.container}>
        {/* Greeting Text */}
        <View style={styles.header}>
          <Text style={styles.greetingText}>Hi, {userName}</Text>
        </View>

        {/* Boxes Section */}
        <View style={styles.boxesContainer}>
          {/* Box 1 */}
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.boxText}>ECE-VLSI</Text>
          </View>

          {/* Box 2 */}
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.boxText}>AI DS</Text>
          </View>

          {/* Box 3 */}
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.boxText}>CSE</Text>
          </View>

          {/* Box 4 */}
          <View style={[styles.box, styles.box4]}>
            <Text style={styles.boxText}>IT</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // Main content container styles
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Light background color for the page
    paddingTop: 20, // Add some space from top after navbar
    paddingHorizontal: 20, // Add small padding around the container
  },

  // Greeting Header Styles
  header: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black', // Blue color for the text
  },

  // Boxes Section Styles
  boxesContainer: {
    flexDirection: 'column', // Stack boxes vertically
    justifyContent: 'flex-start', // Align items from the top
  },
  box: {
    width: '100%', // Make each box take the full width
    height: 120, // Fixed height for each box
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Rounded edges for the box
    marginBottom: 20, // 20px space between each box
    padding: 10, // Small padding inside the box
  },
  box1: {
    backgroundColor: '#cc8989', // Tomato color for Box 1
  },
  box2: {
    backgroundColor: '#ccb989', // Gold color for Box 2
  },
  box3: {
    backgroundColor: '#9dcc89', // LimeGreen color for Box 3
  },
  box4: {
    backgroundColor: '#ab89cc', // DodgerBlue color for Box 4
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
