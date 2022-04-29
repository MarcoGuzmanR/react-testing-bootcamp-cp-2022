export const parseDate = (date = new Date()) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  if (month < 10){
    return `${year}-0${month}-${day}`;
  }

  return `${year}-${month}-${day}`;
};

export const unParseDate = (parsedDate) => {
  const [year, month, day] = parsedDate.split('-');

  if (month < 10){
    return new Date(`${year}-${month[1]}-${day}`);;
  }

  return new Date(`${year}-${month}-${day}`);;
};