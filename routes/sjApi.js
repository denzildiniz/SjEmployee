const express = require('express');
const router = express.Router();

const {getAllEmp, createEmp ,getSingleEmp,updateEmp ,deleteEmp} = require('../controllers/sjApi');

router.route('/').get(getAllEmp).post(createEmp);
router.route('/:id').get(getSingleEmp).put(updateEmp).delete(deleteEmp);




module.exports = router;