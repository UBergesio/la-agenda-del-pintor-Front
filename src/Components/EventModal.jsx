import React, { useState } from "react";
import { Modal, Text, TextInput, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import DateSelector from "./DateSelector";
import { View } from "react-native-web";

import { useSelector } from "react-redux";

const EventModal = ({ visible, setModalVisible, addEvent }) => {
  const [eventName, setEventName] = useState(""); // Almacena el nombre del evento
  // Redux
  const dates = useSelector((state) => state.dates); // Obtiene las fechas del estado global

  const handleAddEvent = () => {
    if (eventName && /* eventDate */ dates.length > 0) {
      // Verifica que el nombre y la fecha no estén vacíos
      // Usamos la última fecha seleccionada desde Redux (suponiendo que puede haber múltiples fechas)
      const eventDate = dates[dates.length - 1];
      addEvent(eventName, eventDate); // Llama a la función para agregar el evento
      setModalVisible(false); // Cierra el modal
    } else {
      alert("Por favor ingresa un nombre y una fecha para el evento.");
    }
  };

  return (
    <Modal
      visible={visible}
      onDismiss={() => setModalVisible(false)} // Cierra el modal al hacer clic fuera
      contentContainerStyle={styles.modalContainer}
    >
      <TextInput
        placeholder="Nombre de obra"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
      />
      <DateSelector />
      <Button style={styles.buttonOpen} onPress={handleAddEvent}>
        <Text>Agregar</Text>
      </Button>
      <Button style={styles.buttonClose} onPress={() => setModalVisible(false)}>
        <Text>Cerrar</Text>
      </Button>{" "}
      {/* Cerrar el modal */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  input: {
    height: 20, // Ajusta la altura para que sea visible
    margin: 12,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    width: "280",
    backgroundColor: "rgba(0, 68, 255, 0.25)",
  },
  buttonOpen: {
    backgroundColor: "rgba(0, 189, 57, 0.56)",
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: "rgba(189, 28, 0, 0.56)",
    marginTop: 10,
  },
});

export default EventModal;
