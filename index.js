const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9000;
const chefInfos = require('./data/chefsData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.get('/chefInfos', (req, res) => {
    res.send(chefInfos)
})
// single chef info 
app.get('/chefInfos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefInfos.find(n => parseInt(n.id) == id);
    res.send(selectedChef);
})
app.listen(port, () => {
    console.log(`Chef API is running on port : ${port}`);
})