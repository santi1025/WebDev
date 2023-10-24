//Import the packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Create app instance and set port
const app = express();
const port = 3000;

//Configure body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

//Serve the index.html page when the user requests the root URL: "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}
);

//Create the post method to handle the form submission
app.post('/calculator-bmi', (req, res) => {
    //Create variables to store the form data
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    //Calculate the BMI
    const bmi = weight / (height * height)*10000;
    //Display the result
    res.send(`Your BMI is ${bmi}`);
    });

    app.listen(port, () => {
    console.log(`Express server is listen on port ${port}!`)
    console.log(`To view the app, open this link http://localhost:${port}`)
    });