import React, { useState } from "react";
import { View, Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";


LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul.",
    "Ago",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mie.", "Jue.", "Vie.", "Sab."],
  today: "Hoy",
};

LocaleConfig.defaultLocale = "es";


const CalendarComponent = () => {
  const [selectedDay, setSelectedDay] = useState("");

  return (
    <View>
      <Calendar
        disableMonthChange={true}
        enableSwipeMonths= {true}
        markingType="multi-period"
        markedDates={{
          "2024-12-14": {
            periods: [
              { startingDay: true, endingDay: false, color: "#5f9ea0" },
              { startingDay: true, endingDay: true, color: "#ffa500" },
              { startingDay: true, endingDay: false, color: "#f0e68c" },
            ],
          },
        }}
      />
    </View>
  );
};

export default CalendarComponent;
