import { Schema, model } from "mongoose";

const AssistantSchema = new Schema({
    Name: String,
    Rut: String,
    Telefono: String,
    Email: String,
    HoursAvailable:String,
    DaysAvailable:String 
    
}, {
    timestamps: true,
    versionKey: false
})



export default model('assistant',AssistantSchema)