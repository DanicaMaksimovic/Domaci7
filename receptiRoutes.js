const express = require('express');
const path = require('path');
const router = express.Router();
const receptiModel = require('../models/receptiModels');
const recep = require('../controllers/receptiControllers');

//router.get('/recepti', ReceptiController.getRecepti);
router.get('/recepti', recep.getRecepti)
//router.post('/recepti', ReceptiController.createRecepti);
router.post('/recepti', recep.createRecepti)
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/form.html'));
});
router.get('/new', (req,res) =>{
    res.sendFile(path.join(__dirname, '../views/new.html'));
});
router.get('/recepti.html', recep.renderRecepti);

module.exports = router;