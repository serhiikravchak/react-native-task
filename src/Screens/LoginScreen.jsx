import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

const LoginScreen = () => {
  const [activeInput, setActiveInput] = useState("");

  const handleActiveInput = (inputName) => {
    setActiveInput(inputName);

  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/image.jpg")}
        style={styles.image}
      >
        <View style={styles.formWrapper}>
          <Text style={styles.formTitle}>ВОЙТИ</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <TextInput
                style={[
                  styles.formInput,
                  activeInput === "email" && styles.formInputActive,
                ]}
                placeholder={"Адрес электронной почты"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => handleActiveInput("email")}
              />
              <TextInput
                style={[
                  styles.formInput,
                  styles.formInputLastChild,
                  activeInput === "password" && styles.formInputActive,
                ]}
                placeholder={"Пароль"}
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={true}
                onFocus={() => handleActiveInput("password")}
              />
              <TouchableOpacity activeOpacity={0.9} style={styles.passwordBtn}>
                <Text style={styles.passwordBtnText}>Показать</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn}>
            <Text style={styles.loginText}>Войти</Text>
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
    position: "relative",
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
  formInputActive: {
    marginHorizontal: 16,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
    borderWidth: 1,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
  },
  formInputLastChild: {
    marginBottom: 0,
  },
  passwordBtn: {
    position: "absolute",
    top: 82,
    right: 32,
  },
  passwordBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
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
