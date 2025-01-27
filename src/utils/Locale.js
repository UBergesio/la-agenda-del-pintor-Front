import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

// Extiende Day.js con el plugin de actualización de configuración regional
dayjs.extend(updateLocale);

// Define el objeto de configuración regional
const localeObject = {
  name: "es", // Nombre del idioma
  weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], // Nombres completos
  weekdaysShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."], // Opcionales: nombres cortos
  weekdaysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], // Opcionales: nombres mínimos
  months: [
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
  monthsShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ],
  formats: {
    LTS: "H:mm:ss",
    LT: "H:mm",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY",
  },
  ordinal: (n) => `${n}º`, // Para números ordinales
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un día",
    dd: "%d días",
    M: "un mes",
    MM: "%d meses",
    y: "un año",
    yy: "%d años",
  },
};


// Actualiza la configuración regional predeterminada
dayjs.updateLocale("es", localeObject);
export default localeObject
