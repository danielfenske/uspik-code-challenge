CREATE TABLE "guests" (
    "id" SERIAL PRIMARY KEY,
    "firstName" VARCHAR(80) NOT NULL,
    "lastName" VARCHAR(80) NOT NULL
);

INSERT INTO "guests" ("firstName", "lastName")
VALUES 
('Candy', 'Pace'), 
('Morgan', 'Porter'), 
('Bridgett', 'Richard'),
('Melisa', 'Preston'),
('Latoya', 'Herrera'),
('Hewitt', 'Hopper');

CREATE TABLE "companies" (
	"id" SERIAL PRIMARY KEY,
	"companyName" VARCHAR(200),
	"cityName" VARCHAR(80),
	"timezone" TEXT
);

INSERT INTO "companies" ("companyName", "cityName", "timezone")
VALUES 
('Hotel California', 'Sanata Barbara', 'US/Pacific'),
('The Grand Budapest Hotel', 'Republic of Zubrowka', 'US/Central'),
('The Heartbreak Hotel', 'Graceland', 'US/Central'),
('The Prancing Pony', 'Bree', 'US/Central'),
('The Fawlty Towers', 'Torquay', 'US/Eastern');

CREATE TABLE "reservations" (
	"id" SERIAL PRIMARY KEY,
	"guestId" INT REFERENCES "guests" NOT NULL,
	"companyId" INT REFERENCES "companies" NOT NULL,
	"roomNumber" INT NOT NULL,
	"startTimestamp" INT NOT NULL,
	"endTimestamp" INT
);

INSERT INTO "reservations" ("guestId", "companyId", "roomNumber", "startTimestamp", "endTimestamp")
VALUES 
(1, 1, 529, 1486654792, 1486852373),
(2, 1, 385, 1486612719, 1486694720),
(3, 2, 141, 1486520344, 1486769616),
(4, 3, 417, 1486614763, 1486832543),
(5, 4, 194, 1486605110, 1486785126),
(6, 5, 349, 1486660637, 1486788273); 

CREATE TABLE "messageTemplates" (
	"id" SERIAL PRIMARY KEY,
	"message" VARCHAR
);

INSERT INTO "messageTemplates" ("message")
VALUES 
('#greeting #firstName, and welcome to #companyName! Room #roomNumber is now ready you. Enjoy your stay, and let us know if you
need anything.'),
('#greeting #firstName, your stay at #companyName begins soon. Your room number (#roomNumber) is ready for your arrival! We look forward to seeing you. 👋'),
('#greeting #firstName! Your room is #roomNumber. We hope you enjoy your stay at #companyName. Please do not hesitate to reach out if you have any questions regarding your stay.'),
('#greeting #firstName, we hope you are ready for an exciting stay at #companyName! Just wanted to let you know that your room number is #roomNumber.'),
('#greeting, #firstName! Room #roomNumber, along with soft sheets and plush pillows, is ready for you! We hope you enjoy your stay at #companyName.');

SELECT * FROM "messageTemplates";

SELECT * FROM "guests"
JOIN "reservations" ON "guests"."id" = "reservations"."guestId"
JOIN "companies" ON "companies"."id" = "reservations"."companyId"
GROUP BY "guests"."firstName", "reservations"."roomNumber", "companies"."companyName";