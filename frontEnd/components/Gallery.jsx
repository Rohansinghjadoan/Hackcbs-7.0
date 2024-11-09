import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setImage } from '../redux/features/imageSlice';

export default function Gallery() {
  const dispatch = useDispatch();
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      dispatch(setImage(result.assets[0].uri));
    }
  };

  return (
    <Link href="../camera/cameraPreview" asChild>
      <TouchableOpacity onPress={pickImageAsync}>
        <View style={styles.blackContainer}>
          <MaterialIcons name="insert-photo" size={40} color="#E5E4E2" />
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  blackContainer: {
    backgroundColor:'black',
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 20,
    marginBottom:18,
    marginRight:10
  },
});
