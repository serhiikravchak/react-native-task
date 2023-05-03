import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/image.jpg")}
        style={styles.image}
      >
        <View style={styles.formWrapper}>
          <Text style={styles.formTitle}>ВОЙТИ</Text>
          <View style={styles.form}>
            <TextInput
              style={[styles.formInput,]}
              name={"email"}
              placeholder={"Адрес электронной почты"}
              placeholderTextColor={"#BDBDBD"}
            />
            <TextInput
              style={[styles.formInput, styles.formInputLastChild]}
              name={"password"}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn}>
            <Text style={styles.loginText}>ВОЙТИ</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.signUpLink}>
              Нет аккаунта? Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formWrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formTitle: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 32,
  },
  form: {
    marginTop: 32,
    marginBottom: 43,
  },
  formInput: {
    marginHorizontal: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
    marginBottom: 16,
  },
  formInputActive:{
    backgroundColor:"#FFFFFF",
    borderColor: "#FF6C00",
    borderWidth: 1,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
    marginBottom: 16,
  },
  formInputLastChild: {
    marginBottom: 0,
  },
  loginBtn: {
    height: 50,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  signUpLink: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginHorizontal: 54,
  },
});

export default LoginScreen;
