import Assistant from '../models/Assistant'


export const postAssistant = async (req, res) => {
const { Name, Rut, Telefono , Email, HoursAvailable, DaysAvailable} = req.body;
  
    try {
      const newAssistant= new Assistant({
        Name, Rut, Telefono , Email, HoursAvailable, DaysAvailable
      });
      const AssistantSaved = await newAssistant.save();
      res.status(201).json(AssistantSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
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