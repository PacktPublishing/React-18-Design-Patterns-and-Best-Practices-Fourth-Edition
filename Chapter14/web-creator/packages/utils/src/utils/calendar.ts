import dates from './dates'

export const getCalendarEventLink = (
  startDate: string,
  endDate: string,
  hasDeposit: boolean,
  pendingAmount: number,
  email: string
) => {
  const nextDayStartDate = dates.addDays(new Date(startDate), 1)
  const nextDayEndDate = dates.addDays(new Date(endDate), 2)

  const title = encodeURIComponent('Tu Reservación en Cabañas San Pancho')
  const location = encodeURIComponent('Rancho San Pancho, 28646 Colima, Mexico')
  const longStartDate = dates.getLongDate(nextDayStartDate, 'es-MX')
  const longEndDate = dates.getLongDate(nextDayEndDate, 'es-MX')
  const selecteDates = `${startDate.replace(/-/g, '')}/${nextDayEndDate.replace(/-/g, '')}`

  const currencyFormat = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  })

  const details =
    encodeURIComponent(`Cabañas San Pancho agradece habernos elegido y te da la más cordial bienvenida, aquí están los datos de tu reservación:

<b>Fecha de llegada:</b>
${longStartDate} a las 3PM

<b>Fecha de salida:</b>
${longEndDate} a las 12PM

${hasDeposit ? '<b>Depósito:</b> $1,000.00' : ''}

<b>Saldo pendiente a pagar:</b> ${currencyFormat.format(pendingAmount)}

<b>Restricciones:</b>
- No se aceptan mascotas
- No se permite fumar dentro de la cabaña

<b>Ubicación:</b>
<a href="https://ranchosanpancho.com/ubicacion">https://ranchosanpancho.com/ubicacion</a>

<b>NOTA:</b> Si viaja de Jalisco o Manzanillo, le recomendamos que llegue a Colima y de
ahí siga el vídeo, el GPS posiblemente la mande por la carretera de Los Ortices o las
Guasimas, ese camino no se encuentra en buen estado.

<b>Cancelaciones o cambios de fecha:</b>
Si necesita cancelar su reservación deberá hacerlo con una anticipación mínima de 7 días,
en este caso su depósito será devuelto en su totalidad, si da aviso de su cancelación con
menos de 7 días de anticipación se le cobrará el 50% de su depósito como penalización y si
no llega el día de su reservación, se le cobrará el 100% de su depósito como penalización.

<b>Reglamento:</b>
<a href="https://ranchosanpancho.com/reglamento">https://ranchosanpancho.com/reglamento</a>

Cualquier cosa que necesites en tu estancia favor de avisarme vía WhatsApp, la persona que
estará disponible para cualquier cosa en físico será el señor Francisco (312-31-95-610),
con el también podrá ordenar desayuno o comida si así lo desea.

Esperamos que disfrute su estancia.`)

  const eventURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&location=${location}&dates=${selecteDates}&add=${email}&details=${details}`

  return eventURL
}
