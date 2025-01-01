import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store/store";

//Screens
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer style={styles.container}>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
