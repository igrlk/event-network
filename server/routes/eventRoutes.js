const express = require('express');

const EventController = require('../controllers/eventController');

const router = express.Router();

router.get('/', EventController.getEvents);
router.post('/', EventController.createEvent);
router.patch('/:id', EventController.patchEvent);
router.delete('/:id', EventController.deleteEvent);

module.exports = router;
