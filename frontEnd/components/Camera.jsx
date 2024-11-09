import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Camera() {
  return (
    <Link href="../camera/cameraViewFinder" asChild>
      <TouchableOpacity>
        <View style={styles.blackContainer}>
          <FontAwesome name="camera" size={36} color="white" />
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  blackContainer: {
    backgroundColor: "black",
    
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 20,
    marginLeft:30,
    marginBottom:16
  },
});
