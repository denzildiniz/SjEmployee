const SjiEmp = require('../models/empSchema')
const asyncWrapper = require('../middleware/asyncWrapper')
const {createCustomError} = require('../error/custom-error')


const getAllEmp = asyncWrapper( async (req,res) =>{
        getEmp = await SjiEmp.find({});
        res.status(200).json({getEmp})
})

const createEmp = asyncWrapper( async (req,res) =>{
    
       const newEmp = await SjiEmp.create(req.body);
       res.status(201).json({newEmp})
    
})

const getSingleEmp = asyncWrapper( async (req,res,next) =>{
    
        const {id:empId} = req.params;
        const singleEmp = await SjiEmp.findOne({_id:empId});
        if(!singleEmp){
            // const error = new Error('not found')   /**for my ref */
            // error.status=404;
            // return next(error)

            return next(createCustomError(`no employee with ${empId}`, 404))
            
        }

        res.status(200).json({
            singleEmp
        })
    
})

const updateEmp = asyncWrapper( async (req,res) =>{
   
        const {id:empId} = req.params;
        const editEmp = await SjiEmp.findOneAndUpdate({_id:empId},req.body,{
            new:true,
            runValidators:true
        });

        if(!editEmp) 
        return next(createCustomError(`no employee with ${empId}`, 404))

        res.status(200).json({editEmp})
   
})

const deleteEmp = asyncWrapper( async(req,res) =>{
    
        const {id:empId} = req.params;
        const delEmp = await SjiEmp.findOneAndDelete({_id:empId});
        if(!delEmp) return next(createCustomError(`no employee with ${empId}`, 404))

        res.status(200).json({msg:`sucess`})
        
    
})

module.exports = {getAllEmp ,createEmp,getSingleEmp, updateEmp ,deleteEmp}