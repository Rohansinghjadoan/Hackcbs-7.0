import { Tabs } from "expo-router";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black", 
        },
        tabBarActiveTintColor: "white", 
        tabBarInactiveTintColor: "#2B70E4", 
      }}
    >
      <Tabs.Screen
        name="about"
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="team"
              size={32}
              color={color} 
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
              color={color} 
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
