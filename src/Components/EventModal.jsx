//Librerias
import React, { useState } from "react";
import { Modal, Text, TextInput, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
// Componentes
import DateSelector from "./DateSelector";
// Redux
import { addJob } from "../Redux/actions/actions";

const EventModal = ({ visible, setModalVisible }) => {
  const [eventName, setEventName] = useState(""); // Almacena el nombre del evento
  const [eventDate, setEventDate] = useState(null); // Fecha del trabajo seleccionada
  const [endDate, setEndDate] = useState(null); // Fecha del fin trabajo seleccionada

  const dispatch = useDispatch();

  const handleAddEvent = () => {
    if (!eventName || !eventDate || !endDate) {
      alert("Por favor, completa todos los campos antes de agregar el trabajo.");
      return;
    }  

    
    if (eventName && eventDate && endDate) {
      const formattedDate = eventDate.toISOString().split("T")[0];
      const formattedEndDate = endDate.toISOString().split("T")[0];
      // Despacha el nombre y la fecha juntos al estado global
      dispatch(addJob({ name: eventName, startDate: formattedDate, endDate: formattedEndDate }));

      setEventName(""); // Limpia el modal
      setEventDate(null); // Limpia la fecha
      setEndDate(null); // Limpia la fecha de fin
      setModalVisible(false); // Cierra el modal
    } else {
      alert("Por favor ingresa un nombre y selecciona una fecha.");
    }
  };

  return (
    <Modal
      visible={visible}
      onDismiss={() => setModalVisible(false)} // Cierra el modal al hacer clic fuera
      contentContainerStyle={styles.modalContainer}
    >
      <TextInput
        placeholder="Nombre de trabajo"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
      />
      <DateSelector onDateSelect={setEventDate} onEndDateSelect={setEndDate}/>
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
    borderRadius:39,
    margin:15,
    borderWidth: 3,
    borderColor: 'rgb(196, 220, 221)',
    backgroundColor: 'rgb(231, 238, 238)',
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
