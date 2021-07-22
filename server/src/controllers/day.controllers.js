import DaysAviables from '../models/DaysAvailable'


export const getDays= async (req, res) =>{
    const day = await DaysAviables.find();
    return res.json(day);
}


export const getDaysId= async (req, res) =>{
    const { dayId } = req.params;
    const day = await HourAvaible.findById(dayId);
    res.status(200).json(day);
}
