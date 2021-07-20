import Schedule from '../models/Schedule'
import Assistant2 from "../models/Assistant";


export const postSchedule = async (req, res) => {
const {title, Departament, School, Teacher,StartDate,EndDate,Assistant} = req.body;
const AssistantFound = await Assistant2.find({ Name: { $in:Assistant} });
  
    try {
      const newShedule = new Schedule({
        title,
        Departament,
        School,
        Teacher,
        StartDate,
        EndDate,
        Assistant: AssistantFound.map((assistant) => assistant._id),
      });
  
      const ScheduleSaved = await newShedule.save();
      res.status(201).json(ScheduleSaved);
    } catch (error) {
      console.log(error);

      return res.status(200).json({
        _id: ScheduleSaved._id,
        title: ScheduleSaved.title,
        Departament: ScheduleSaved.Departament,
        School: ScheduleSaved.School,
        Teacher: ScheduleSaved.Teacher,
        StartDate: ScheduleSaved.StartDate,
        EndDate: ScheduleSaved.EndDate,
        Assistant: ScheduleSaved.Assistant,
      });

      
    }
  };

export const getSchedule= async (req, res) =>{
    const shedule = await Schedule.find();
    return res.json(shedule);
}

export const getScheduleId= async (req, res) =>{
    const { scheduleId } = req.params;
    const schedule = await Schedule.findById(scheduleId);
    res.status(200).json(schedule);
}

export const updateSchedule= async (req, res) =>{
    const updatedShedule = await Schedule.findByIdAndUpdate(
        req.params.scheduleId,
        req.body,
        {
          new: true,
        }
      );
      res.status(204).json(updatedShedule);
};

export const deleteSchedule= async (req, res) =>{
    const { scheduleId } = req.params;
    await Schedule.findByIdAndDelete(scheduleId);
    res.status(204).json();
};