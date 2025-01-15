// Librerías necesarias
import React, { useState, useEffect } from "react";
import { SafeAreaView, Button, Text, StyleSheet } from "react-native";
import DatePicker from "@react-native-community/datetimepicker";
import { TextInput } from "react-native-paper";

const DateSelector = ({ onDateSelect, onEndDateSelect }) => {
  const [date, setDate] = useState(new Date()); // Almacena la fecha seleccionada
  const [show, setShow] = useState(false); // Controla la visibilidad del DatePicker
  const [showDaysInput, setShowDaysInput] = useState(false); // Controla la visibilidad del input para ingresar días para sumar
  const [number, onChangeNumber] = useState(0); // Almacena el número de días que se sumarán a la fecha

  // Función que se llama cuando el usuario selecciona una fecha
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate; // Fecha seleccionada por el usuario
    const dateWithoutTime = new Date(currentDate.setHours(0, 0, 0, 0)); // Elimina la hora
    setShow(false); // Ocultar el DatePicker una vez que se selecciona la fecha
    setDate(dateWithoutTime); // Actualizar la fecha en el estado local
    onDateSelect(dateWithoutTime); // Envía la fecha seleccionada al componente padre
  };

  // Función para mostrar el DatePicker de fecha inicial
  const showInitpicker = () => {
    setShow(true); // Llamar a showMode con el modo "date"
  };

  // Función para calcular la fecha de fin de obra, sumando el número de días ingresados
/*   const calculateEndDate = () => {
    const endDate = new Date(date); // Copia la fecha de inicio
    endDate.setDate(endDate.getDate() + parseInt(number)); // Suma el número de días a la fecha de inicio
    onEndDateSelect(endDate)
    return endDate; // Devuelve la fecha de fin de obra calculada
  }; */

  // ! VER SI SE PUEDE HACER ESTA FUNCION EN EL BACK PARA NO CARGAR TANTO EL FRONT
useEffect(() => {
  if (number && onEndDateSelect) {
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + parseInt(number));
    onEndDateSelect(endDate); // Solo calcula y envía la fecha al cambiar `number`.
  }
}, [number, date, onEndDateSelect]);


  return (
    <SafeAreaView>
      {/* Botón para seleccionar la fecha de inicio de obra */}
      <Button onPress={showInitpicker} title="Seleccionar inicio de trabajo" />
      <Text style={styles.text}>
        Inicio de obra: {date.toLocaleDateString()}
      </Text>{" "}
      {/* Muestra la fecha seleccionada */}
      {/* Botón para ingresar el número de días */}
      <Button
        onPress={() => {
          setShowDaysInput(true); // Muestra el input para ingresar el número de días
        }}
        title="Cuántos días lleva?"
      />
      {/* Campo de texto para ingresar el número de días, solo visible si se ha presionado el botón anterior */}
      {showDaysInput && (
        <TextInput
          style={styles.input}
          inputMode="numeric" // Permite solo números
          keyboardType="numeric" // Asegura que se pueda ingresar solo números
          onChangeText={onChangeNumber} // Actualiza el estado con el valor del input
          value={number} // Muestra el número de días ingresado
          placeholder="Agregue los días de trabajo" // Placeholder en el campo de texto
        />
      )}
      {/* Muestra la fecha de fin de obra solo si se ha ingresado un número de días */}
      {/* {number && (
        <Text style={styles.text}>
          Fin de obra: {''}
        </Text>
      )} */}
      {/* Muestra el DatePicker si el estado "show" es verdadero */}
      {show && (
        <DatePicker
          testID="datePicker"
          value={date} // Valor inicial de la fecha (la fecha seleccionada)
          mode="date" // Modo del DatePicker (siempre "date")
          onChange={onChange} // Llama a la función onChange cuando se selecciona una fecha
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40, // Ajusta la altura para que el input sea más visible
    margin: 12,
    padding: 10,
    borderWidth: 1,
    width: 280, // Ajuste de ancho
    backgroundColor: "rgba(0, 68, 255, 0.25)", // Color de fondo del input
  },
  text: {
    fontSize: 18,
    margin: 15,
    fontStyle: "italic", // Estilo en cursiva para el texto
  },
});

export default DateSelector;
