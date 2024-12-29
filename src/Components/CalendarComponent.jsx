import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import { FAB, Portal, Provider as PaperProvider } from "react-native-paper";
import EventModal from "./EventModal";

const CalendarComponent = () => {
  const [items, setItems] = useState({});  // Estado que almacena los eventos
  const [fabOpen, setFabOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para cargar los elementos de la agenda
  const loadItems = (day) => {
    // Esta función solo actualizará los eventos para el día que estás viendo, sin crear eventos automáticos.
    const newItems = { ...items };
  
    // Aquí puedes agregar la lógica de carga de eventos desde una base de datos o cualquier otra fuente externa.
    // Por ejemplo:
    // if (newItems[day.dateString]) {
    //   setItems(newItems);
    // }
  
    // Si no hay eventos previos, no agregar nada para ese día.
    setItems(newItems);
  };

  const addEvent = (eventName, eventDate) => {
    const newItems = { ...items };
    if (!newItems[eventDate]) {
      newItems[eventDate] = [];
    }
    newItems[eventDate].push({ name: eventName, height: 50 });  // Ejemplo simple de evento
    setItems(newItems);  // Actualiza el estado con los nuevos eventos
  };

  // Renderiza cada elemento en la agenda
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Agenda */}
        <Agenda
          items={items}
          showClosingKnob={true}
          hideKnob={false}
          loadItemsForMonth={loadItems}
          selected={new Date().toISOString().split("T")[0]}
          renderItem={renderItem}
          theme={{
            agendaDayTextColor: "#008b8b",
            agendaDayNumColor: "#008b8b",
            agendaTodayColor: "red",
            agendaKnobColor: "#008b8b",
            selectedDayBackgroundColor: "#008b8b",
          }}
          pastScrollRange={12}
          futureScrollRange={12}
        />

        {/* Modal integrado */}
        <EventModal
          visible={modalVisible}
          setModalVisible={setModalVisible}
          addEvent={addEvent}   // Pasar la función addEvent al modal
        />

        {/* FAB flotante */}
        <Portal>
          <FAB.Group
            open={fabOpen}
            visible
            icon={fabOpen ? "calendar-today" : "plus"}
            actions={[
              {
                icon: "plus",
                label: "Agregar trabajo",
                onPress: () => setModalVisible(true),  // Abre el modal al presionar el FAB
                style: { backgroundColor: "#a8e8e8" },
              },
              {
                icon: "account-arrow-right",
                label: "Pasar al siguiente trabajo",
                onPress: () => console.log("Pasar al siguiente trabajo"),
                style: { backgroundColor: "#a8e8e8" },
              },
              {
                icon: "account-arrow-left",
                label: "Días atrasados",
                onPress: () => console.log("Días atrasados"),
                style: { backgroundColor: "#a8e8e8" },
              },
              {
                icon: "account-cancel",
                label: "Quitar trabajo",
                onPress: () => console.log("Quitar trabajo"),
                style: { backgroundColor: "#a8e8e8" },
              },
            ]}
            onStateChange={({ open }) => setFabOpen(open)}
            fabStyle={styles.fab}
            backdropColor="rgba(0, 0, 0, 0.3)" // Fondo semitransparente
          />
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    backgroundColor: "#f5f5f5", // Fondo base
  },
  item: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fab: {
    backgroundColor: "#008b8b",
  },
});

export default CalendarComponent;
