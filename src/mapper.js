import { lenght, mass, time } from "./functions/mass";

export default data = () => {
  let object = [
    {
      label: "Length",
      data: lenght,
    },
    {
      label: "Mass",
      data: mass,
    },
    {
      label: "Time",
      data: time,
    },
  ];
  return object;
};
