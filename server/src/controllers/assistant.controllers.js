import Assistant from '../models/Assistant';
import Day from "../models/DaysAvailable";
import Shedule from "../models/Schedule";

export const postAssistant = async (req, res) => {
const { Name, Rut, Telefono , Email, HoursAvailable, DaysAvailable, address,paymenDetaitls,confirmationTurn}= req.body;
const dayFound = await Day.find({ Namex: { $in:DaysAvailable} });



    try {
      const newAssistant= new Assistant({
        Name,
        Rut, 
        Telefono , 
        Email, 
        HoursAvailable, 
        DaysAvailable: dayFound.map((days) => days._id),
        address,
        paymenDetaitls,
        confirmationTurn,
      });

      const AssistantSaved = await newAssistant.save();
      res.status(201).json(AssistantSaved);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);

      return res.status(200).json({
        _id: AssistantSaved._id,
        Name: AssistantSaved.Name,
        Rut: AssistantSaved.Rut,
        Telefono: AssistantSaved.Telefono,
        HoursAvailable: AssistantSaved.HoursAvailable,
        DaysAvailable: AssistantSaved.DaysAvailable,
        address: AssistantSaved.address,
        paymenDetaitls: AssistantSaved.paymenDetaitls,
        confirmationTurn: AssistantSaved.confirmationTurn,
      });

    }
    console.log(dayFound)
  };

export const getAssistant= async (req, res) =>{
    const assistant = await Assistant.find();
    return res.json(assistant);
}


export const getAssistantId= async (req, res) =>{
    const { AssistantId } = req.params;
    const assistant = await Assistant.findById(AssistantId);
    res.status(200).json(assistant);
}

export const updateAssistant= async (req, res) =>{
    const updateassistant = await Assistant.findByIdAndUpdate(
        req.params.AssistantId,
        req.body,
        {
          new: true,
        }
      );
      res.status(204).json(updateassistant);
};

export const deleteAssistant= async (req, res) =>{
    const { AssistantId } = req.params;
    await Assistant.findByIdAndDelete(AssistantId);
    res.status(204).json();
};