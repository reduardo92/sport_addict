export default (date: string) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const splitDate: any = date.split('-');
  const month = Math.floor(splitDate[1]) - 1;
  return `${months[month]} ${splitDate[2]}, ${splitDate[0]}`;
};
