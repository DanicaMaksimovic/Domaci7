const fs = require('fs').promises;
const fp = './recepti.json';

function getAll () {
    return fs.readFile(fp, 'utf-8')
    .then(data => JSON.parse(data))
    .catch(err => {
        if(err.code === 'ENOENT') return[];
        throw err;
    });
}
function saveRecepti (recepti){
    return fs.writeFile(fp, JSON.stringify(recepti, null, 2), 'utf-8')
    .catch(err => {throw err});
}
module.exports={
    getAll,
    saveRecepti
}