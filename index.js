const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
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
    const id = req.params.id;
    const selectedChef = chefInfos.find(n => n.id === id);
    res.send(selectedChef);
})
app.listen(port, () => {
    console.log(`Chef API is running on port : ${port}`);
})