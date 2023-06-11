import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/image.jpg")}
          style={styles.image}
        >
          <View style={styles.profile}>
            <TouchableOpacity style={styles.logoutBtn}>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => {
                  useRoute(false);
                }}
              />
            </TouchableOpacity>
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../../../assets/avatars/user.jpg")}
                style={styles.userAvatar}
              />
              <TouchableOpacity style={styles.avatarBtn}>
                <Text>
                  <Feather name="x-circle" size={25} color="#BDBDBD" />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userContainer}>
              <Text style={styles.userName}>Natali Romanova</Text>
              <View style={styles.imagesContainer}>
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.userPost}
                    source={require("../../../assets/images/mountain.jpg")}
                  />
                </View>
                <Text style={styles.imageName}>Ліс</Text>
                <View style={styles.imageStatistics}>
                  <View style={styles.comments}>
                    <View style={styles.commentsIcon}>
                      <EvilIcons name="comment" size={28} color="#FF6C00" />
                    </View>
                    <Text style={styles.commentsNumber}>0</Text>
                  </View>
                  <View style={styles.likes}>
                    <Text style={styles.likesIcon}>
                      <EvilIcons name="like" size={28} color="#FF6C00" />
                    </Text>
                    <Text style={styles.likesNumber}>10</Text>
                  </View>
                  <View style={styles.location}>
                    <View style={styles.locationIcon}>
                      <EvilIcons name="location" size={28} color="#BDBDBD" />
                    </View>
                    <Text style={styles.locationText}>
                      Ivano-Frankivs'k Region, Ukraine
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
  },

  profile: {
    backgroundColor: "#fff",
    width: "100%",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    left: 128,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  userAvatar: {
    resizeMode: "cover",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  avatarBtn: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 13,
    top: 76,
    left: 108,
  },
  avatarBtnImage: {
    position: "absolute",
    top: 78,
    left: 107,
    height: 25,
    width: 25,
  },
  logoutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
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
  userPost: {
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
  imageStatistics: {
    display: "flex",
    flexDirection: "row",
    marginTop: 11,
    alignItems: "center",
    justifyContent: "space-between",
  },
  comments: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentsIcon: {
    marginRight: 9,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    // marginRight:8,
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    color: "#212121",
    textDecorationLine: "underline",
  },
});

export default ProfileScreen;
