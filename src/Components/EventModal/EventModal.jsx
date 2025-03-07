//Librerias
import React, { useState, useEffect} from "react";
import { Modal, TextInput, Button } from "react-native-paper";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
// Componentes
import DatePicker from "../DatePicker/DatePicker";
// Redux
import { addJob, updateJob } from "../../Redux/actions/actions";

const EventModal = ({ visible, setModalVisible, jobToEdit, /* onSave */ }) => {
  const [eventName, setEventName] = useState(""); // Almacena el nombre del evento
  const [eventDate, setEventDate] = useState(null); // Fecha del trabajo seleccionada
  const [endDate, setEndDate] = useState(null); // Fecha del fin trabajo seleccionada

  const dispatch = useDispatch();

    // Effect para cargar los datos del trabajo si estamos en modo edición
    useEffect(() => {
      if (jobToEdit) {
        setEventName(jobToEdit.name);
        setEventDate(dayjs(jobToEdit.startDate).toDate());
        setEndDate(dayjs(jobToEdit.endDate).toDate());
        console.log(jobToEdit);
        
      }
    }, [jobToEdit]);

    const handleSaveEvent = () => {
      if (!eventName || !eventDate || !endDate) {
        alert("Por favor, completa todos los campos antes de guardar el trabajo.");
        return;
      }
    
      const formattedStartDate = dayjs(eventDate).format("YYYY-MM-DD");
      const formattedEndDate = dayjs(endDate).format("YYYY-MM-DD");
    
      if (jobToEdit) {
        // Estamos en modo edición: enviar el id junto a los nuevos datos
        dispatch(
          updateJob(jobToEdit.id, {
            id: jobToEdit.id, // Se envía el id para identificar el trabajo
            name: eventName,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          })
        );        
      } else {
        // Si fuera agregar un nuevo trabajo (aunque aquí nos interesa la edición)
        dispatch(
          addJob({
            name: eventName,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          })
        );
      }
    
      setEventName("");
      setEventDate(null);
      setEndDate(null);
      setModalVisible(false);
    };

  return (
    <Modal
      visible={visible}
      onDismiss={() => setModalVisible(false)} // Cierra el modal al hacer clic fuera
      contentContainerStyle={styles.modalContainer}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardDismissMode="on-drag"
      >
        <TextInput
          placeholder="Titulo para el trabajo"
          mode="outlined"
          value={eventName}
          onChangeText={setEventName}
          style={styles.input}
          theme={{
            colors: {
              primary: "blue",
              underlineColor: "transparent",
              background: "white", // Fondo del TextInput
            },
          }}
        />
        <DatePicker
          onStartDateChange={(date) => setEventDate(date)} // Actualiza la fecha de inicio
          onEndDateChange={(date) => setEndDate(date)} // Actualiza la fecha de fin
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonClose}
            mode="contained"
            onPress={() => setModalVisible(false)}
          >
            <Text>Cerrar</Text>
          </Button>{" "}
          <Button
            style={styles.buttonOpen}
            mode="contained"
            onPress={handleSaveEvent}
          >
            <Text>{jobToEdit ? "Editar" : "Agregar"}</Text>
          </Button>
          {/* Cerrar el modal */}
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    borderRadius: 39,
    margin: 15,
    marginTop: -20,
    borderWidth: 3,
    borderColor: "rgb(196, 220, 221)",
    backgroundColor: "rgb(231, 238, 238)",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "95%",
    height: 17,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Espacio entre los botones
    width: "100%", // Asegúrate de que ocupe todo el ancho del modal
    paddingHorizontal: 20, // Espaciado horizontal para separar de los bordes
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: "rgba(0, 189, 57, 0.56)",
    marginTop: 10,
    width: "45%",
  },
  buttonClose: {
    backgroundColor: "rgba(189, 28, 0, 0.56)",
    marginTop: 10,
    width: "45%",
  },
});

export default EventModal;
