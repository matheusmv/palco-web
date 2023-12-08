const monthTable = {
  '01': 'JAN',
  '02': 'FEV',
  '03': 'MAR',
  '04': 'ABR',
  '05': 'MAI',
  '06': 'JUN',
  '07': 'JUL',
  '08': 'AGO',
  '09': 'SET',
  10: 'OUT',
  11: 'NOV',
  12: 'DEZ',
};

function prettifyMonth(month) {
  const prettyMonth = monthTable[month];
  return prettyMonth || 'UNDEF';
}

export function parseEventDate(eventDate) {
  const [date] = eventDate.split('T');
  const [year, month, day] = date.split('-');

  return { year, month: prettifyMonth(month), day };
}
