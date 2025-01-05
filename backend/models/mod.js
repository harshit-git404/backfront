const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true, 
  },
  mobile: {
    type: String,
    required: true, 
    match: /^[6-9]\d{9}$/, 
  },
  message: {
    type: String,
    required: true, 
  },
}, {
  timestamps: true, 
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
