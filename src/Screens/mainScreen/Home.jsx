import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen";

const Home = () => {
  return (
    <View style={styles.container}>
      <PostsScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
});   
export default Home;
