const express = require('express');
const router = express.Router();
const Form = require('../models/mod'); 

router.post('/form', async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    const newForm = new Form({
      name,
      email,
      mobile,
      message,
    });

    const savedForm = await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully', data: savedForm });
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(500).json({ message: 'Failed to submit the form', error });
  }
});

router.get('/form', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error('Error retrieving forms:', error);
    res.status(500).json({ message: 'Failed to retrieve forms', error });
  }
});

module.exports = router;
