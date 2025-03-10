 // LIBRERIAS
 import "../../utils/CalendarLocale";
 import React, { useState, useEffect } from "react";
 import { View, Text, StyleSheet} from "react-native";
 import { FAB, Button, Portal, Provider as PaperProvider } from "react-native-paper";
 import { Agenda } from "react-native-calendars";
 import { useDispatch, useSelector } from "react-redux";
 
 // COMPONENTES
 import EventModal from "../EventModal/EventModal";
 
 // REDUX
 import { addAllDates, addJob } from "../../Redux/actions/actions";
 
 // COMPONENTE PRINCIPAL
 const CalendarComponent = () => {
   //Estados locales
   const [fabOpen, setFabOpen] = useState(false);
   const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
   const [isEditingMode, setIsEditingMode] = useState(false); // Estado para controlar si se está editando un trabajo
   const [jobToEdit, setJobToEdit] = useState(null); // Estado para almacenar el trabajo que se está editando
 
   //Estados globales
   const agendaItems = useSelector((state) => state.agendaItems);
   const markedDates = useSelector((state) => state.markedDates);
   const dispatch = useDispatch();
 
   useEffect(() => {
     dispatch(addAllDates());
   }, [dispatch]);

   // Funciona para manejar el modo edicion activado o desactivado
 /*   const handleEditMode = (mode) => {
    setIsEditingMode(mode)
   } */
 
   //Funcion para abrir modal de edicion
   const openEditModal = (job) => {
     setJobToEdit(job);
     setModalVisible(true);
   };
   

   // ! VER SI ESTA FUNCION RELAMENTE ES NECESARIA. CREO QUE NO. LOS DISPATCHS NO SALEN DESDE ACA.
/*    const handleSaveJob = (jobData) => {
     if (jobData.id) {
       dispatch(updateJob(jobData.id, jobData)); // Si hay un id, es una actualización
     } else {
       dispatch(addJob(jobData)); // Si no hay id, es un nuevo trabajo
     }
     setModalVisible(false); // Cierra el modal
   }; */
   
   const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.separator} />
        <View style={styles.item}>
          <Text style={styles.eventName}>{item.name}</Text>
          {isEditingMode && (
            // Aquí asegúrate de pasar "item" (que contiene el id) a la función de edición
            <Button icon="pencil" onPress={() => openEditModal(item)} style={styles.editButton} />
          )}
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
           markingType="multi-period"
           markedDates={markedDates}
           items={agendaItems}
           keyExtractor={(item, index) => `${item.name}-${index}`}
           showClosingKnob={true}
           hideKnob={false}
           hideExtraDays={true}
           selected={new Date().toISOString().split("T")[0]}
           renderItem={renderItem}
           renderEmptyData={renderEmptyData}
           theme={{
             agendaDayTextColor: "#008b8b",
             agendaDayNumColor: "#008b8b",
             agendaTodayColor: "red",
             agendaKnobColor: "#008b8b",
             selectedDayBackgroundColor: "#008b8b",
 
             "stylesheet.agenda.main": {
               header: {
                 overflow: "hidden",
                 justifyContent: "flex-end",
                 position: "absolute",
                 height: "102%",
                 width: "100%",
               },
               knobContainer: {
                 flex: 1,
                 position: "absolute",
                 left: 0,
                 right: 0,
                 height: 24,
                 bottom: 0,
                 alignItems: "center",
                 backgroundColor: "rgba(255, 255, 255, 0.48)",
               },
             },
           }}
           pastScrollRange={12}
           futureScrollRange={12}
         />
 
         {/* Modal para agregar eventos */}
         <EventModal 
           visible={modalVisible} 
           setModalVisible={setModalVisible} 
           jobToEdit={jobToEdit} // Pasa el trabajo a editar
           /* onSave={handleSaveJob} // Función para manejar el guardado
 */  />
 
         {/* FAB flotante */}
         {modalVisible === false && (
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
                   icon: "pencil",
                   label: "Editar trabajo",
                   onPress: () => setIsEditingMode(true),
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
         )}
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
   editButton: {
     alignSelf: "flex-end",
     backgroundColor: "rgb(0, 176, 189)"
   },
 });

 export default CalendarComponent;