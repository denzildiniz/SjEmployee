const SjiEmp = require('../models/empSchema')


const getAllEmp = async (req,res) =>{
    try {
        getEmp = await SjiEmp.find({});
        res.status(200).json({getEmp})
    } catch (error) {
        
        res.status(500).json({msg:error })
    }
}
const createEmp = async (req,res) =>{
    try {
       const newEmp = await SjiEmp.create(req.body);
       res.status(201).json({newEmp})
    } catch (error) {
        res.status(500).json({msg:error })
    }
}

const getSingleEmp = async (req,res) =>{
    try {
        const {id:empId} = req.params;
        const singleEmp = await SjiEmp.findOne({_id:empId});
        if(!singleEmp){
            return res.status(404).josn({msg:`${empId} dose not exist's`})
        }

        res.status(200).json({
            singleEmp
        })
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const updateEmp = async (req,res) =>{
    try {
        res.send("update emp")
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteEmp = async(req,res) =>{
    try {
        const {id:empId} = req.params;
        const delEmp = await SjiEmp.findOneAndDelete({_id:empId});
        if(!delEmp) return res.status(404).json({msg:`${empId} can not be found!!`});

        res.status(200).json({msg:`sucess`})
        
    } catch (error) {
        res.status(500).json({
            msg:error
        })
    }
}

module.exports = {getAllEmp ,createEmp,getSingleEmp, updateEmp ,deleteEmp}