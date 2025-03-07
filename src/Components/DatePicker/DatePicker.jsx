import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { StyleSheet } from "react-native";
import localeObesject from "../../utils/Locale";

const DatePicker = ({
  initialStartDate,
  initialEndDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });

  // Este efecto se dispara solo cuando se cambia el trabajo a editar
  useEffect(() => {
    // Si recibimos valores iniciales (por ejemplo, al abrir el modal en edición), los usamos.
    if (initialStartDate && initialEndDate) {
      setRange({
        startDate: initialStartDate,
        endDate: initialEndDate,
      });
    }
    // Dependemos solo de los valores iniciales, no de range.
  }, []);

  const handleDateChange = (params) => {
    setRange({
      startDate: params.startDate,
      endDate: params.endDate,
    });

    // Notifica al componente padre
    if (params.startDate) onStartDateChange(params.startDate);
    if (params.endDate) onEndDateChange(params.endDate);
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        mode="range"
        locale="es"
        displayFullDays={true}
        startDate={range.startDate}
        endDate={range.endDate}
        onChange={handleDateChange}
      />
      <View>
        <Text>
          <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Desde:
          </Text>
          {range.startDate
            ? dayjs(range.startDate).format("  LLLL")
            : "  No seleccionado"}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Hasta:
          </Text>
          {range.endDate
            ? dayjs(range.endDate).format("  LLLL")
            : "  No seleccionado"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  /*   container: {
    height: "90%"
  }, */
});

export default DatePicker;
