import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body

    const newContact = new Contact({
      name,
      email,
      phone,
      service,
      message
    })

    await newContact.save()

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: newContact
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
})

// Get all contacts (for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({
      success: true,
      data: contacts
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    })
  }
})

export default router