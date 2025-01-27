import React, { useState } from "react";
import { View, Text } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { StyleSheet } from "react-native";
import localeObject from "../../utils/Locale";


const DatePicker = ({onStartDateChange, onEndDateChange}) => {
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });


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
            : "No seleccionado"}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Hasta:
          </Text>
          {range.endDate
            ? dayjs(range.endDate).format("  LLLL")
            : "No seleccionado"}
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
