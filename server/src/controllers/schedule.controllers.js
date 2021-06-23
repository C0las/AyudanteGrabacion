import Schedule from '../models/Schedule'


export const postSchedule = async (req, res) => {
const {title, Departament, School, Teacher,StartDate,EndDate} = req.body;
  
    try {
      const newShedule = new Schedule({
        title,
        Departament,
        School,
        Teacher,
        StartDate,
        EndDate
      });
  
      const ScheduleSaved = await newShedule.save();
      res.status(201).json(ScheduleSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
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