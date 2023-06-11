import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Публікації</Text>
          <View style={styles.logoutIcon}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </View>
        </View>
      </View>
      <View style={styles.user}>
        <Image
          source={require("../../../assets/avatars/user.jpg")}
          style={styles.userAvatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.imagesContainer}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/mountain.jpg")}
          />
        </View>
        <Text style={styles.imageName}>Ліс</Text>
        <View style={styles.imageStatistics}>
          <View style={styles.comments}>
            <View style={styles.commentsIcon}>
              <EvilIcons name="comment" size={28} color="#BDBDBD" />
            </View>
            <Text style={styles.commentsNumber}>0</Text>
          </View>
          <View style={styles.location}>
            <View style={styles.locationIcon}>
            <EvilIcons name="location" size={28} color="#BDBDBD" />
            </View>
            <Text style={styles.locationText}>Ivano-Frankivs'k Region, Ukraine</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#E8E8E8",
  },
  headerContainer: {
    position: "relative",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    marginTop: 55,
    marginBottom: 11,
  },
  headerText: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    color: "#212121",
  },
  logoutIcon: {
    position: "absolute",
    top: 0,
    right: 16,
    width: 25,
    height: 25,
  },
  user: {
    marginHorizontal: 16,
    marginTop: 32,
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  userAvatar: {
    borderRadius: 18,
    width: 60,
    height: 60,
    marginRight: 8,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    color: "#212121",
  },
  imagesContainer: {
    marginHorizontal: 16,
    marginTop: 33,
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 240,
    textAlign: "center",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  imageName: {
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
  },
  imageStatistics:{
    display: "flex",
    flexDirection: "row",
    marginTop: 11,
    alignItems: "center",
    justifyContent: "space-between",
  },
  comments:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentsIcon:{
    marginRight:9,
  },
  location:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon:{
    // marginRight:8,
  },
  locationText:{
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    color: "#212121",
    textDecorationLine: "underline",
  }
});
export default PostsScreen;
