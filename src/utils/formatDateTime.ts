

export const formatDateAndTime = (dateStr: string, timeStr: string): string => {
  const isoString = `${dateStr}T${timeStr}`;
  const date = new Date(isoString);

  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  return `${weekday}, ${day} ${month}, ${year}, ${hours}:${minutes} ${ampm}`;
}
