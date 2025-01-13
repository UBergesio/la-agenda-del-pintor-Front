// LIBRERIAS
import CalendarLocale from "../utils/CalendarLocale";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB, Portal, Provider as PaperProvider } from "react-native-paper";
import { Agenda } from "react-native-calendars";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTES
import EventModal from "./EventModal";

// REDUX
import { addAllDates } from "../Redux/actions/actions";
import { backgroundColor } from "react-native-calendars/src/style";

// COMPONENTE PRINCIPAL
const CalendarComponent = () => {
  const [fabOpen, setFabOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  const jobs = useSelector((state) => state.jobs); // Accede a las fechas desde Redux
  const dispatch = useDispatch(); // Para despachar acciones si es necesario












  useEffect(() => {
    dispatch(addAllDates()); // Obtiene las fechas del servidor
  }, []);

  const events = [
    { name: "Evento 1", startDate: "2025-01-06", endDate: "2025-01-16" },
    { name: "Evento 2", startDate: "2025-01-07", endDate: "2025-01-14" },
  ];

  const [agendaItems, setAgendaItems] = useState({});
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const items = {};
    const marks = {};

    events.forEach((event) => {
      let currentDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);

      while (currentDate <= endDate) {
        const dateString = currentDate.toISOString().split("T")[0];

        // Construir los items para la lista de eventos
        if (!items[dateString]) {
          items[dateString] = [];
        }
        items[dateString].push({ name: event.name, date: dateString });

        // Construir los marcadores para el período
        if (!marks[dateString]) {
          marks[dateString] = { periods: [] };
        }
        marks[dateString].periods.push({
          startingDay: dateString === event.startDate,
          endingDay: dateString === event.endDate,
          color: event.name === "Evento 1" ? "#FF6347" : "#4682B4", // Colores para diferenciar eventos
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    setAgendaItems(items);
    setMarkedDates(marks);
  }, []);










  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.separator} />
        <View style={styles.item}>
          <Text style={styles.eventName}>{item.name}</Text>
        </View>
      </View>
    );
  };

  const renderEmptyData = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay reservas para este día</Text>
    </View>
  );

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Agenda */}
        <Agenda
          style={styles.agenda}
          markingType="multi-period"
          markedDates={markedDates}
          items={agendaItems}
          keyExtractor={(item, index) => `${item.name}-${index}`} // Usa una clave única
          showClosingKnob={true}
          hideKnob={false}
          selected={new Date().toISOString().split("T")[0]}
          renderItem={renderItem}
          renderEmptyData={renderEmptyData} // Mostrar un mensaje cuando no hay eventos
          theme={{
            agendaDayTextColor: "#008b8b",
            agendaDayNumColor: "#008b8b",
            agendaTodayColor: "red",
            agendaKnobColor: "#008b8b",
            selectedDayBackgroundColor: "#008b8b",
            
              'stylesheet.agenda.main': {
                header: {
                  overflow: 'hidden',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  height: '102%',
                  width: '100%'
                },
                knobContainer: {
                  flex: 1,
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 24,
                  bottom: 0,
                  alignItems: 'center',
                  backgroundColor: "rgba(255, 255, 255, 0.48)"
              },
              },
            }}
          
          pastScrollRange={12}
          futureScrollRange={12}
        />

        {/* Modal para agregar eventos */}
        <EventModal visible={modalVisible} setModalVisible={setModalVisible} />

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
                onPress: () => setModalVisible(true), // Abre el modal al presionar el FAB
                style: { backgroundColor: "rgb(0, 176, 189)" },
              },
              {
                icon: "account-arrow-right",
                label: "Pasar al siguiente trabajo",
                onPress: () => console.log("Pasar al siguiente trabajo"),
                style: { backgroundColor: "rgb(0, 176, 189)" },
              },
              {
                icon: "account-arrow-left",
                label: "Días atrasados",
                onPress: () => console.log("Días atrasados"),
                style: { backgroundColor: "rgb(0, 176, 189)" },
              },
              {
                icon: "account-cancel",
                label: "Quitar trabajo",
                onPress: () => console.log("Quitar trabajo"),
                style: { backgroundColor: "rgb(0, 176, 189)" },
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
  },
  itemContainer: {
    marginBottom: 8,
    marginTop: 8,
  },
  separator: {
    height: 1.5, // Altura de la línea
    backgroundColor: "#ccc", // Color de la línea
    marginVertical: 9, // Espaciado alrededor de la línea
  },
});

export default CalendarComponent;
