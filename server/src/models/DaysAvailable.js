import { Schema, model } from "mongoose";

const DaySchema = new Schema({
    Namex: String,
}, {
    timestamps: true,
    versionKey: false
})

export default model('days',DaySchema)