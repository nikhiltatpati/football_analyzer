export const parseDate = (date: string): Date => {
  const dateArray = date.split("/").map((item) => {
    return parseInt(item);
  });
  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
