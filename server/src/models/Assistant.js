import { Schema, model } from "mongoose";

const AssistantSchema = new Schema(
    {
    Name: String,
    Rut: String,
    Telefono: String,
    Email: String,
    HoursAvailable:String,

    address:{
      street:String,
      city: String,
    },
    paymenDetaitls: {
      acountNumber:String,
      backname:String,
      accountType: String,
    },

    DaysAvailable:[
        {
          ref: "days",
          type: Schema.Types.ObjectId,
        },
      ],
}, {
    timestamps: true,
    versionKey: false
})



export default model('assistant',AssistantSchema)