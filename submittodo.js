const express = require('express');

const app = express();

const PORT = 3000;
 

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
 

app.post('/submittodoitem', (req, res) => {

    const { itemName, itemDescription } = req.body;
 
    if (!itemName || !itemDescription) {

        return res.status(400).json({ error: 'Both itemName and itemDescription are required.' });

    }
 

    console.log('Received To-Do Item:', { itemName, itemDescription });
 
    return res.status(200).json({ message: 'To-Do item received successfully.' });

});
 

app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});

 