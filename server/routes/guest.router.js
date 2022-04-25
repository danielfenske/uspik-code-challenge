const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// selectMessage picks one message out of avaialble templates
const selectMessage = require('../modules/selectMessage');
// personalizeMessage changes variables of message template to reflect guests' stay
const personalizeMessage = require('../modules/personalizeMessage');

// GET
router.get('/:id', async (req, res) => {

    let guestId = req.params.id;

    // selects all information related to the guest and their reservation, 
    // which includes the company they have a reservation with
    const guestQuery = await pool.query(
        `SELECT * FROM "guests"
        JOIN "reservations" ON "guests"."id" = "reservations"."guestId"
        JOIN "companies" ON "companies"."id" = "reservations"."companyId" WHERE "guests"."id" = $1;`, [guestId]);

    const guestInformation = guestQuery.rows[0];


    // selects all message templates from DB (array)
    const messageQuery = await pool.query(`SELECT * FROM "messageTemplates";`);

    // 'selectedMessage' represents one message randomly chosen out of the list 
    // to be sent to the guest
    let selectedMessage = selectMessage(messageQuery.rows);
    
    // 'personalizedMessage' represents the selectedMessage including guest information
    let personalizedMessage = personalizeMessage(selectedMessage, guestInformation);

    res.send(personalizedMessage)
});

module.exports = router;