import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import RNPickerSelect from "react-native-picker-select";

const branches = ["AI&DS", "AI&ML", "CS", "IT"];
const backendURL = "http://192.168.78.168:8000/upload";

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <View style={styles.dateTimeContainer}>
      <Text style={styles.dateTimeText}>{formattedDate}</Text>
      <Text style={styles.dateTimeText}>{formattedTime}</Text>
    </View>
  );
};

const FormComponent = () => {
  const { control, handleSubmit } = useForm();
  const image = useSelector((state) => state.image.image);
  const [loading, setLoading] = useState(false);
  const [detectedFacesCount, setDetectedFacesCount] = useState(null);

  const onSubmit = async (data) => {
    const currentDateTime = new Date();
    const formData = new FormData();

    formData.append("semester", data.semester);
    formData.append("lectureNo", data.lectureNo);
    formData.append("branch", data.branch);
    formData.append("dateTime", currentDateTime.toISOString());
    if (image) {
      const filename = image.split("/").pop();
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : "image";
      formData.append("image", { uri: image, name: filename, type });
    }

    setLoading(true);

    try {
      console.log("Sending request to:", backendURL);
      const response = await fetch(backendURL, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response);

      if (response.ok) {
        const responseData = await response.json();
        console.log("Success:", responseData.message);
        console.log("Detected Faces Count:", responseData.detected_faces_count);
        setDetectedFacesCount(responseData.detected_faces_count);
      } else {
        console.log("Error", "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <DateTimeDisplay />
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Semester</Text>
        <Controller
          control={control}
          name="semester"
          defaultValue={1}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              onValueChange={onChange}
              items={Array.from({ length: 8 }, (_, i) => ({
                label: `Semester ${i + 1}`,
                value: i + 1
              }))}
              value={value}
              placeholder={{ label: "Select Semester", value: null }}
              style={pickerSelectStyles}
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Lecture No.</Text>
        <Controller
          control={control}
          name="lectureNo"
          defaultValue={1}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              onValueChange={onChange}
              items={Array.from({ length: 6 }, (_, i) => ({
                label: `Lecture ${i + 1}`,
                value: i + 1
              }))}
              value={value}
              placeholder={{ label: "Select Lecture No.", value: null }}
              style={pickerSelectStyles}
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Branch</Text>
        <Controller
          control={control}
          name="branch"
          defaultValue={branches[0]}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              onValueChange={onChange}
              items={branches.map((branch) => ({
                label: branch,
                value: branch
              }))}
              value={value}
              placeholder={{ label: "Select Branch", value: null }}
              style={pickerSelectStyles}
            />
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : detectedFacesCount !== null ? (
        <Text style={styles.totalPresentText}>
          Total Present: {detectedFacesCount}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: 'white'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  },
  dateTimeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  totalPresentText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: '100%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: '100%',
    backgroundColor: '#E0E0E0'
  },
});

export default FormComponent;
