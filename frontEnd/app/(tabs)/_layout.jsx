import { Tabs } from "expo-router";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black", // Background color for the entire tab bar
        },
        tabBarActiveTintColor: "white", // Active icon color
        tabBarInactiveTintColor: "#2B70E4", // Inactive icon color
      }}
    >
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="team"
              size={32}
              color={color} // Dynamically change color based on active/inactive state
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="home/home"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={32}
              color={color} // Dynamically change color based on active/inactive state
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="announcements"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="announcement" size={24} color={color} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="camera/cameraViewFinder"
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="camera/cameraPreview"
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="form/form"
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};
