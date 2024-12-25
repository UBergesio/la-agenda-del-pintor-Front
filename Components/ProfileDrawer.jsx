// ProfileDrawer.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileDrawer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text>Más detalles del perfil aquí</Text>
      {/* Agrega más opciones o contenido según lo que necesites */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ProfileDrawer;
