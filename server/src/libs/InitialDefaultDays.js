import Day from "../models/DaysAvailable";


export const createDay = async () => {
  try {
    const count = await Day.estimatedDocumentCount();

    if (count > 0) return;
    const values = await Promise.all([
      new Day({ Namex: "Lunes" }).save(),
      new Day({ Namex: "Martes" }).save(),
      new Day({ Namex: "Miercoles" }).save(),
      new Day({ Namex: "Jueves" }).save(),
      new Day({ Namex: "Viernes" }).save(),
      new Day({ Namex: "Sábado" }).save(),
      new Day({ Namex: "Todos los días"}).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};