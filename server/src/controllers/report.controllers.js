import report from '../models/Report'


export const postReport = async (req, res) => {
const {Name, Motivo, Observacion, clase} = req.body;
  
    try {
      const newReport= new report({
        Name, Motivo, Observacion, clase
      });
      const ReportSaved = await newReport.save();
      res.status(201).json(ReportSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

export const getReport= async (req, res) =>{
    const repor = await report.find();
    return res.json(repor);
}


export const getReportId= async (req, res) =>{
    const { reportId } = req.params;
    const repor = await report.findById(reportId);
    res.status(200).json(repor);
}

export const updateReport= async (req, res) =>{
    const updatereport = await report.findByIdAndUpdate(
        req.params.reportId,
        req.body,
        {
          new: true,
        }
      );
      res.status(204).json(updatereport);
};

export const deleteReport= async (req, res) =>{
    const { reportId } = req.params;
    await report.findByIdAndDelete(reportId);
    res.status(204).json();
};