export const dateStringToDate = (date: string): Date => {
  const [day, month, year] = date
    .split('/')
    .map((value: string): number => parseFloat(value));
  // month is zero index
  return new Date(year, month - 1, day);
};
