import Day from "../models/DaysAvailable";


export const createDay = async () => {
  try {
    const count = await Day.estimatedDocumentCount();

    if (count > 0) return;
    const values = await Promise.all([
      new Day({ Namex: "lunes" }).save(),
      new Day({ Namex: "martes" }).save(),
      new Day({ Namex: "miercoles" }).save(),
      new Day({ Namex: "jueves" }).save(),
      new Day({ Namex: "viernes" }).save(),
      new Day({ Namex: "sabado" }).save(),
      new Day({ Namex: "Todos los dias"}).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};