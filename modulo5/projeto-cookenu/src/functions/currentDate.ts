const currentDate = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${year}/${month}/${day}`;
};
export default currentDate;
