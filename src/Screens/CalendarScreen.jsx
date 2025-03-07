import React from "react";
import { View, StyleSheet } from "react-native";
import CalendarComponent from "../Components/CalendarComponent/CalendarComponent";


const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      {/* Calendario ocupa toda la pantalla */}
      <CalendarComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor ocupe toda la pantalla
  },
  fab: {
    position: "absolute", // Hace que el FAB sea independiente del resto del diseño
    right: 16, // Separación desde el borde derecho
    bottom: 16, // Separación desde el borde inferior
  },
});

export default CalendarScreen;
