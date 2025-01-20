import dayjs from "dayjs";

import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(updateLocale)

dayjs.updateLocale('es', {
  months: [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ],
  weekdaysMin: ["Dom.", "Lun.", "Mar.", "Mie.", "Jue.", "Vie.", "Sab."]
})