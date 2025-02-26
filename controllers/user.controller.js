import User from '../models/user.model.js';
import { sendEmailWithGuide } from '../services/email.service.js';

export const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = new User({ name, email, phone });
    await user.save();

    // Send email with the guide
    await sendEmailWithGuide(email, name);

    res.status(201).json({ message: 'User created successfully and email sent' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
};