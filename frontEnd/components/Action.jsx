import React from 'react';
import Camera from "./Camera";
import Gallery from "./Gallery";
import { View, StyleSheet, TouchableOpacity,ScrollView,Text } from "react-native";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Link } from "expo-router";

export default function Action() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.promptText1}>Snap a photo, and let AI do the rest – quick, easy, and reliable attendance!</Text>
        <Camera />
      </View>
      <View style={styles.bottomSection}>
      <Provider store={store}>
          <Gallery />
        </Provider>
        <Text style={styles.promptText2}>Upload any photo, and our AI ensures accurate attendance in seconds!</Text>
        
      </View>
      <View style={styles.aboutSection}>
        <Text style={styles.welcomePrompt}>
          Welcome to AttendEase, where AI simplifies attendance by instantly recognizing faces from uploaded photos.
        </Text>
        <Link href="/about" asChild>
          <TouchableOpacity style={styles.aboutButton}>
            <Text style={styles.aboutButtonText}>Know more</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
  topSection: {
    height: "90vh",
    display:'flex',
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 90,
  },
  bottomSection: {
    height: "60vh",
    justifyContent: "center",
    alignItems: "center",
    padding: 90,
    backgroundColor:'white',
    display:'flex',
    flexDirection:'row'
  },
  promptText1: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    
  },
  promptText2: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    
    marginLeft:20
    
  },
  aboutSection: {
    height: "30%", // Takes up 20% of the available space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E4E2',
    padding: 20,
    marginBottom:20
  },
  welcomePrompt: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  aboutButton: {
    backgroundColor: "#4169E1",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  aboutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
  