import React, { useState } from "react";
import { Modal, Text, TextInput, Button } from "react-native-paper";
import { StyleSheet } from "react-native";

const EventModal = ({ visible, setModalVisible, addEvent }) => {
  const [eventName, setEventName] = useState("");  // Almacena el nombre del evento
  const [eventDate, setEventDate] = useState("");  // Almacena la fecha del evento

  const handleAddEvent = () => {
    if (eventName && eventDate) {
      addEvent(eventName, eventDate);  // Llama la función para agregar el evento
      setModalVisible(false);  // Cierra el modal
    } else {
      alert("Por favor ingresa un nombre y una fecha para el evento.");
    }
  };

  return (
    <Modal
      visible={visible}
      onDismiss={() => setModalVisible(false)}  // Cierra el modal al hacer clic fuera
      contentContainerStyle={styles.modalContainer}
    >
      <Text>Agregar Evento</Text>
      <TextInput
        label="Nombre del Evento"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
      />
      <TextInput
        label="Fecha del Evento (YYYY-MM-DD)"
        value={eventDate}
        onChangeText={setEventDate}
        style={styles.input}
      />
      <Button onPress={handleAddEvent}>Agregar</Button>
      <Button onPress={() => setModalVisible(false)}>Cerrar</Button> {/* Cerrar el modal */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white', 
    padding: 20,
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    width: '80%',
  },
});

export default EventModal;
