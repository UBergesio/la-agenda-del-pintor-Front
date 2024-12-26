import React from "react";
import { View, StyleSheet } from "react-native";
import CalendarComponent from "../Components/CalendarComponent";
import FabGroupComponent from "../Components/FabGroupComponent";

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <CalendarComponent />
      <FabGroupComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor ocupe toda la pantalla
    justifyContent: "space-between", // Asegura que los componentes estén correctamente espaciados
  },
});

export default CalendarScreen;
