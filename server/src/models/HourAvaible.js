import { Schema, model } from "mongoose";

const HourSchema = new Schema({
    hourAvaible: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('HourAviable',HourSchema)