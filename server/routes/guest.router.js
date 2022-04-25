const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
router.get('/:id', async (req, res) => {

    let guestId = req.params.id;

    const queryText = `SELECT * FROM "guests"
    JOIN "reservations" ON "guests"."id" = "reservations"."guestId"
    JOIN "companies" ON "companies"."id" = "reservations"."companyId" WHERE "guests"."id" = $1;`

    const guestQuery = await pool.query(queryText, [guestId]);

    res.send(guestQuery.rows);

});

module.exports = router;