import { Schema, model } from "mongoose";

const ReportSchema = new Schema({
    Name: String,
    Motivo: String,
    Observacion: String,
    clase: String
    
}, {
    timestamps: true,
    versionKey: false
})



export default model('report',ReportSchema)