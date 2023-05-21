// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {useRoute} from "./router"



export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
