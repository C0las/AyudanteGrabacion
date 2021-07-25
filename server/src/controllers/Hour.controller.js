import HourAvaible from '../models/HourAvaible'


export const postsHour = async (req, res) => {
const {hourAvaible} = req.body;
  
    try {
      const newHour= new HourAvaible({
        hourAvaible
      });
      const HourSaved = await newHour.save();
      res.status(201).json(HourSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

export const getHour= async (req, res) =>{
    const hour = await HourAvaible.find();
    return res.json(hour);
}


export const getHourId= async (req, res) =>{
    const { hourId } = req.params;
    const hour = await HourAvaible.findById(hourId);
    res.status(200).json(hour);
}

export const updateHour= async (req, res) =>{
    const updateHour = await HourAvaible.findByIdAndUpdate(
        req.params.hourId,
        req.body,
        {
          new: true,
        }
      );
      res.status(204).json(updateHour);
};

export const deleteHour= async (req, res) =>{
    const { hourId } = req.params;
    await HourAvaible.findByIdAndDelete(hourId);
    res.status(204).json();
};