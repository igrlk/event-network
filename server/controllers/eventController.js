const Event = require('../models/event');

module.exports.getEvents = async (req, res) => {
  const errors = [];
  try {
    const events = await req.user.getEvents();
    res.send(events);
  } catch (err) {
    errors.push({ error: err.toString() });
    res.status(400).send({ errors });
  }
};

module.exports.createEvent = async (req, res) => {
  const errors = [];

  try {
    const { title, text, date, shapeCoordinates } = req.body;

    if (!title) {
      errors.push({ title: 'Title is empty' });
    }

    if (!text) {
      errors.push({ text: 'Text is empty' });
    }

    if (!date) {
      errors.push({ date: 'Date is empty' });
    }

    if (!shapeCoordinates) {
      errors.push({ shapeCoordinates: 'Shape coordinates are empty' });
    } else if (!Array.isArray(shapeCoordinates)) {
      errors.push({ shapeCoordinates: 'Shape coordinates should have an array type' });
    }

    if (errors.length > 0) {
      return res.status(422).send({ errors });
    }

    const event = await Event.create({
      title,
      text,
      date,
      shapeCoordinates,
      userId: req.user.id,
    });

    res.send(event);
  } catch (err) {
    errors.push({ error: err.toString() });
    res.status(400).send({ errors });
  }
};

module.exports.patchEvent = async (req, res) => {
  const errors = [];
  try {
    const event = await Event.findByPk(req.params.id);

    if (!event) {
      res.send(404);
    }

    if (event.userId !== req.user.id) {
      res.send(403);
    }

    const updateObject = getUpdateObject(req.body);

    const result = await event.update(updateObject);
    res.send(result);
  } catch (err) {
    errors.push({ error: err.toString() });
    res.status(400).send({ errors });
  }
};

module.exports.deleteEvent = async (req, res) => {
  const errors = [];
  try {
    const event = await Event.findByPk(req.params.id);

    if (!event) {
      res.send(404);
    }

    if (event.userId !== req.user.id) {
      res.send(403);
    }

    await Event.destroy({ truncate: true });
    res.send(200);
  } catch (err) {
    errors.push({ error: err.toString() });
    res.status(400).send({ errors });
  }
};

function getUpdateObject({ title, text, date, shapeCoordinates }) {
  const updateObject = {};

  if (title) {
    updateObject.title = title;
  }
  if (text) {
    updateObject.text = text;
  }
  if (date) {
    updateObject.date = date;
  }
  if (shapeCoordinates) {
    updateObject.shapeCoordinates = shapeCoordinates;
  }

  return updateObject;
}
