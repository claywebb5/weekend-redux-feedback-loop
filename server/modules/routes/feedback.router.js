const express = require('express');
const router = express.Router();
const pool = require('../pool');

// Adds a new feedback submission to the feedback database table
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('In Feedback,Router.js and the req.body:', newFeedback);
    const newFeeling = newFeedback.feeling;
    const newUnderstanding = newFeedback.understanding;
    const newSupport = newFeedback.support;
    const newComments = newFeedback.comments;

    const sqlQuery = `INSERT INTO "feedback"
        (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4);`;
    
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