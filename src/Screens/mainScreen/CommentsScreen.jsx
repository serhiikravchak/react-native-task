import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CommmentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Comments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
    },
});   

export default CommmentsScreen;
