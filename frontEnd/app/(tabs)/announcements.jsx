import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Profile from '../../components/Profile';

export default function Announcements() {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [announcements, setAnnouncements] = useState([
    { title: 'Announcement 1', body: 'This is the body of the first announcement.' },
    { title: 'Announcement 2', body: 'This is the body of the second announcement.' },
    { title: 'Announcement 3', body: 'This is the body of the third announcement.' },
  ]);

  const colors = ['#cc8989', '#ccb989', '#9dcc89', '#ab89cc'];

  const handlePostAnnouncement = () => {
    setAnnouncements([...announcements, { title, body }]);
    setModalVisible(false);
    setTitle('');
    setBody('');
  };

  const handleCancel = () => {
    setModalVisible(false);
    setTitle('');
    setBody('');
  };

  return (
    <View style={styles.container}>
      {/* Profile Navbar */}
      <Profile />

      {/* Heading */}
      <Text style={styles.heading}>Announcements</Text>

      {/* Scrollable Announcement List */}
      <ScrollView contentContainerStyle={styles.announcementContainer}>
        {announcements.map((announcement, index) => (
          <View key={index} style={[styles.announcementBox, { backgroundColor: colors[index % colors.length] }]}>
            <Text style={styles.announcementTitle}>{announcement.title}</Text>
            <Text style={styles.announcementBody}>{announcement.body}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Floating Create Post Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)} // Show modal
      >
        <MaterialIcons name="add" size={40} color="white" />
      </TouchableOpacity>

      {/* Modal for creating new post */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Create Announcement</Text>
            
            {/* Input fields for title and body */}
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={[styles.input, { height: 100 }]} // Body input is larger
              placeholder="Body"
              value={body}
              onChangeText={setBody}
              multiline={true}
            />

            {/* Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postButton} onPress={handlePostAnnouncement}>
                <Text style={styles.buttonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0, // Remove padding around the container
    backgroundColor: '#f7f7f7',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    marginLeft: 20,
  },
  announcementContainer: {
    flexGrow: 1,
  },
  announcementBox: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginLeft:20,
    marginRight:20
  },
  announcementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  announcementBody: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },

  // Floating button styles
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2B70E4',
    borderRadius: 50,
    padding: 15,
    elevation: 10, // Shadow effect
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B70E4',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    height: 50,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  postButton: {
    backgroundColor: '#2B70E4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
