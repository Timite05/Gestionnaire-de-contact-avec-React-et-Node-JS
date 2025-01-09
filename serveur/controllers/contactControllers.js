const db = require('../config/db');
const Joi = require("joi");

const schema = Joi.object({
    nom: Joi.string().min(3).required(),
    mail: Joi.string().email().required(),
    tel: Joi.string().pattern(/^\d+$/).required()
});

// Fonction pour récupérer les contacts
const getContacts = (req, res) => {
    const request = "SELECT * FROM contact";
    db.query(request, (error, result) => {
        if (error) {
            console.error("Erreur lors de la récupération des contacts:", error);
            return res.status(500).json({ message: "Erreur lors de la récupération des contacts." });
        }
        res.status(200).json(result);
    });
};

// Fonction pour ajouter un contact
const addContact = (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { nom, mail, tel } = req.body;
    const request = "INSERT INTO contact(nom, mail, tel) VALUES (?,?,?)";
    db.query(request, [nom, mail, tel], (error, result) => {
        if (error) {
            console.error("Erreur lors de l'insertion :", error);
            return res.status(500).json({ message: "Erreur lors de l'insertion des données", error });
        }
        res.status(200).json({ message: "Données insérées avec succès", data: result });
    });
};

// Fonction pour supprimer un contact
const deleteContact = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM contact WHERE id = ?';
    db.query(query, [id], (error, result) => {
        if (error) {
            console.error('Erreur lors de la suppression du contact:', error);
            return res.status(500).json({ error: 'Erreur lors de la suppression du contact.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Contact introuvable.' });
        }
        res.status(200).json({ message: 'Contact supprimé avec succès.' });
    });
};

module.exports = {
    getContacts,
    addContact,
    deleteContact
};
