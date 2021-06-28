import { Schema, model } from "mongoose";

export const HourAviables = ["Turno de mañana", "Turno de tarde"];

const HourAviablesSchema = new Schema(
  {
    name: Array,
  },
  {
    versionKey: false,
  }
);

export default model("Role", HourAviablesSchema);