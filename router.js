import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./src/Screens/auth/LoginScreen";
import RegistrationScreen from "./src/Screens/auth/RegistrationScreen";
import Home from "./src/Screens/mainScreen/Home";
import CreatePostsScreen from "./src/Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./src/Screens/mainScreen/ProfileScreen";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{ tabBarShowLabel: false, tabBarStyle: {paddingTop: 9} }}
    >
      <MainTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            backgroundColor: "#FF6C00",
            width: 10,
            // height: 40,
            borderRadius: 20,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="add-outline" size={size} color="#fff" />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
