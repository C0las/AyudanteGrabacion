import { Schema, model } from "mongoose";

const SheduleSchema = new Schema({
    title: String,
    Departament: String,
    School: String,
    Teacher: String,
    StartDate: Date,
    EndDate: Date,
    Assistant: [
        {
          ref: "assistant",
          type: Schema.Types.ObjectId,
        
        },
      ], 
}, 

{
    timestamps: true,
    versionKey: false
})

export default model('Schedule',SheduleSchema)