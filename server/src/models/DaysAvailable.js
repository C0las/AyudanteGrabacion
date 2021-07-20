import { Schema, model } from "mongoose";

const DaySchema = new Schema({
    DaysAvaible: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('DayAviable',DaySchema)