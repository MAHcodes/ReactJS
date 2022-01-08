const generate = (start, end) => {
  let res = [];
  while (start <= end) {
    res.push(start);
    start++;
  }
  return res;
};

const currentYear = new Date().getFullYear();
export const dates = {
  years: generate(1902, currentYear),
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  days: generate(1, 31),
};
