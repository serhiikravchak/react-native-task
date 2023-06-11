import React from "react";
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.headerIcon}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
          <Text style={styles.headerText}>Cтворити публікацію</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.uploadContainer}>
          <View style={styles.uploadIconContainer}>
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </View>
        </View>
        <View>
          <Text style={styles.photoInfoText}>Загрузите фото</Text>
          <View style={[styles.photoNameInput, styles.line]}>
            <TextInput style={styles.text} placeholder="Название" />
          </View>
          <View style={[styles.photoLocationInput, styles.line]}>
            <View>
              <EvilIcons name="location" size={24} color="#BDBDBD" />
            </View>
            <TextInput style={styles.text} placeholder="Местность" />
          </View>
        </View>
        <TouchableOpacity style={styles.postBtn}>
          <Text style={styles.postBtnText}>Опубликовать</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.removeBtn}>
          <FontAwesome name="trash-o" size={24} color="#BDBDBD" />
        </TouchableOpacity>
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
  headerIcon: {
    position: "absolute",
    transform: [{ translateX: -168 }, { translateY: 0 }],
    width: 25,
    height: 25,
  },
  mainContainer: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  uploadContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  photoInfoText: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  line: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  photoNameInput: {
    marginTop: 48,
  },
  photoLocationInput: {
    marginTop: 32,
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
  },
  postBtn:{
    marginTop:32,
    width: 343,
    height: 51,
    backgroundColor: "#F6F6F6",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 100,
  },
  postBtnText:{
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD"
  },
  
  removeBtn:{
    marginHorizontal:152,
    marginTop:80,
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CreatePostsScreen;
