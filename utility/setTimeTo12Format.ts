export default (time24: string) => {
  const [hour, minute] = time24.slice(0, -3).split(':');
  const setPer = parseInt(hour) < 12 ? 'AM' : 'PM';
  const formatHour = parseInt(hour) < 12 ? hour : parseInt(hour) - 12;
  return `${formatHour}:${minute} ${setPer}`;
};
