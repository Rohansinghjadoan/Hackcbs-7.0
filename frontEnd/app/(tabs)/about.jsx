import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.subHeading}>Welcome to our App!</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>
          Our app is designed to help you manage your tasks and stay productive. Whether you're working on a project or need help organizing your day, we're here to make it easier for you.
        </Text>
        <Text style={styles.text}>
          We aim to provide a seamless experience, allowing you to focus on what really matters. Our team is passionate about bringing innovative solutions to everyday challenges.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>For more information, contact us at support@ourapp.com.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2B70E4',
  },
  subHeading: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
  content: {
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 10,
  },
  footer: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
