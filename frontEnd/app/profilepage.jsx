import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileDashboard() {
  // Sample user data
  const user = {
    name: "VINAY KUMAR SAHINI",
    username: "@vinayk123",
    designation: "Head of Department(AI & DS)",
   
  };

  return (
    <View style={styles.container}>
      {/* Profile Information Box */}
      <View style={styles.profileInfoBox}>
        {/* Profile Icon */}
        <MaterialIcons name="account-circle" size={160} color="#2B70E4" />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileUsername}>{user.username}</Text>
          <Text style={styles.profileDesignation}>{user.designation}</Text>
         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#f7f7f7',
  },
  profileInfoBox: {
    marginTop:80,
    marginLeft:20,
    marginRight:20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 20,

    
  },
  profileTextContainer: {
    marginLeft: 20,
    marginTop:20
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2B70E4',
    marginRight:10
  },
  profileUsername: {
    fontSize: 16,
    color: '#555',
    marginLeft:58
  },
  profileDesignation: {
    fontSize: 16,
    color: '#777',
    marginLeft:6
  },
  profilePosts: {
    fontSize: 16,
    color: '#888',
  },
});
