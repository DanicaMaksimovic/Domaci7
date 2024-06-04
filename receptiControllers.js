const receptiModel = require('../models/receptiModels');
const fs = require('fs').promises;
const path = require('path');

async function getRecepti (req,res){
    try{
        const recepti = await receptiModel.getAll();
        res.json(recepti);
    }
    catch(err){
        res.status(500).json({error: 'Neuspesno'})
    }
}

async function createRecepti(req,res){
    try{
        const newRecept = req.body;
        const recepti = await receptiModel.getAll();
        recepti.push(newRecept);
        await receptiModel.saveRecepti(recepti);
        res.status(201).send(`Novi recept kreiran: ${JSON.stringify(newRecept)}`);
    }
    catch(err){
        res.status(500).json({error: 'Neuspesno snimanje'});
    }
}

async function renderRecepti(req,res){
    receptiModel.getAll().then(recepti =>{
        return fs.readFile(path.join(__dirname, '../view/recepti/html'), 'utf-8')
        .then(tem =>{
            let receptiLista = recepti.map(recept => `<li> Recept: ${recept.recept} </li>`).join('');
            let popunjenHTML = tem.replace('{{receptList}}', receptiLista);
            res.send(popunjenHTML);
        })
    }).catch(err=> res.status(500).send(`Error: ${err}`));
}

module.exports={
    getRecepti,
    createRecepti,
    renderRecepti
}