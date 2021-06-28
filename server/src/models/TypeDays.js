import { Schema, model } from "mongoose";

export const DaysAviables = ["lunes", "Martes", "Miércoles","Jueves","Viernes", "Sabado","Todos los días"];

const DaysAviableSchema = new Schema(
  {
    name: Array,
  },
  {
    versionKey: false,
  }
);

export default model("Role", DaysAviableSchema);