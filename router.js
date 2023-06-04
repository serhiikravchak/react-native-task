import React from "react";
import { StyleSheet, View } from "react-native";
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
      screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: 83, paddingTop: 9, paddingBottom: 34, } }}
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
          tabBarStyle: { display: "none" },
          headerShown: false,
          // tabBarItemStyle: {
          //   width: 20,
          //   backgroundColor: "#FF6C00",
          //   borderRadius: 20,
          // },
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.btn}>
            <Ionicons name="add-outline" size={size} color="#fff" />
            </View>
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

const styles = StyleSheet.create({
  btn: {
   width: 70,
   height: 40,
   justifyContent:'center',
   alignItems: "center",
   backgroundColor: "#FF6C00",
   borderRadius: 20,
  
  },
});
