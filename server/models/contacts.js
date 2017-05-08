const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const contacts = require('../data/contacts.json');

const contactSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phoneNumber: {type: Number}
});

contactSchema.plugin(autoIncrement.plugin, {
  model: 'Break',
  startAt: 1,
});

const Contact = module.exports = mongoose.model('Contact', contactSchema);

// from line 16 - Contact is 'Contact' table, contactSchema are the spec. 'attributes'
Contact.create(contacts, (err, contacts) => {
  if (err) return console.log(err);
});