import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const inititalState = {
    login: "",
    email: "",
    password: "",
  };

  const [state, setState] = useState(inititalState);
  const [activeInput, setActiveInput] = useState("");
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);

  const navigation = useNavigation();

  const handleInput = (inputName) => {
    setActiveInput(inputName);
    setIsShownKeyboard(true);
  };

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    setActiveInput("");
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    console.log(state);
    setState(inititalState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/image.jpg")}
          style={styles.image}
        >
          <View style={styles.form}>
            <View style={styles.avatarWrapper}>
              <TouchableOpacity style={styles.avatarBtn}>
                <Image
                  style={styles.avatarBtnImage}
                  source={require("../../../assets/images/addAvatarBtn.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.formTitle}>Регистрация</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : ""}
            >
              <TextInput
                style={[
                  styles.formInput,
                  activeInput === "login" && styles.formInputActive,
                ]}
                placeholder={"Логин"}
                placeholderTextColor={"#BDBDBD"}
                value={state.login}
                onFocus={() => handleInput("login")}
                onBlur={keyboardHide}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={[
                  styles.formInput,
                  activeInput === "email" && styles.formInputActive,
                ]}
                placeholder={"Адрес электронной почты"}
                placeholderTextColor={"#BDBDBD"}
                value={state.email}
                onFocus={() => handleInput("email")}
                onBlur={keyboardHide}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
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
                onBlur={keyboardHide}
                value={state.password}
                onFocus={() => handleInput("password")}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity activeOpacity={0.9} style={styles.passwordBtn}>
                <Text style={styles.passwordBtnText}>Показать</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.loginBtn}
              onPress={handleSubmit}
            >
              <Text style={styles.loginText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.signUpLink}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
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

  form: {
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
  avatarBtn: {
    position: "absolute",

    // backgroundColor: "transparent",
    // borderColor: "#FF6C00",
    // borderWidth: 1,
    // borderRadius: "50%",
  },
  avatarBtnImage: {
    position: "absolute",
    top: 78,
    left: 107,
    height: 25,
    width: 25,
  },
  formTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
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
    marginBottom: 43,
  },
  passwordBtn: {
    position: "absolute",
    top: 148,
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

export default RegistrationScreen;
