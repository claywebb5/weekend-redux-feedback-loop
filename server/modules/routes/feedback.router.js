const express = require('express');
const router = express.Router();
// Make sure the path to the pool.js file is correct
const pool = require('../pool');

// Adds a new feedback submission to the feedback database table
router.post('/', (req, res) => {

    // Declare newFeedback variable to be the value of req.body
    // helps with streamlining the other variables
    // req.body is the reducer object from index.js
    let newFeedback = req.body;

    console.log('In Feedback,Router.js and the req.body:', newFeedback);

    // Declare variables for each of the properties of the req.body
    const newFeeling = newFeedback.feeling; // Feeling - first page
    const newUnderstanding = newFeedback.understanding; // Content understanding - second page
    const newSupport = newFeedback.support; // Support - third page
    const newComments = newFeedback.comments; // Comments - fourth page

    // Set the sqlQuery (same as in the past)
    const sqlQuery = `INSERT INTO "feedback"
        (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4);`;
    
        // The pool.query will take in the sqlQuery set above, 
        // and in an array the variables for each property of req.body
        pool.query(sqlQuery,
            [
                newFeeling, 
                newUnderstanding,
                newSupport, 
                newComments
            ]
        )
        .then( (response) => {
            console.log('Successful Post in Feedback.Router.js!!!');
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log(`Error in feedback POST router`);
            res.sendStatus(500);
        });
});


module.exports = router;