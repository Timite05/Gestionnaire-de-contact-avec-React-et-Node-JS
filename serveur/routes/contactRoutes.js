const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactControllers');

// Route pour récupérer les contacts
router.get('/get', contactController.getContacts);

// Route pour ajouter un contact
router.post('/post', contactController.addContact);

// Route pour supprimer un contact
router.delete('/delete/:id', contactController.deleteContact);

module.exports = router;
