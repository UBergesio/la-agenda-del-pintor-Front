import { LocaleConfig } from "react-native-calendars";

// Configuración del idioma del calendario
LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ],
  monthNamesShort: [
    "Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", 
    "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."
  ],
  dayNames: [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
  ],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
  today: "Hoy",
};

// Establecer idioma por defecto
LocaleConfig.defaultLocale = "es";

export default LocaleConfig;
