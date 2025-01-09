const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api', contactRoutes);


//Démarrer le serveur
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});





// const app = express()

// app.use(cors())
// app.use(express.json())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))

// const db = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"annuaire",
// })

// const schema = Joi.object({
//     nom: Joi.string().min(3).required(),
//     mail: Joi.string().email().required(),
//     tel: Joi.string().pattern(/^\d+$/).required()
// });

// app.get("/api/get", (req,res)=>{
//     const request = "SELECT * FROM contact"
//     db.query(request,(error,result)=>{
//         res.send(result)
//     })
// })

// // route pour inérer un contact 
// app.post("/api/post", (req, res) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }

//     const {nom,mail,tel } = req.body;
//     const request = "INSERT INTO contact(nom, mail, tel) VALUES (?,?,?)";
//     // Log pour vérifier les données reçues
//     console.log("Données reçues :", { nom, mail, tel });
//     // executer la requete sql
//     db.query(request, [nom, mail, tel], (error, result) => {
//         if (error) {
//             console.error("Erreur lors de l'insertion :", error);
//             return res.status(500).json({ message: "Erreur lors de l'insertion des données", error });
//         }

//         // Succès : Retournez une réponse avec un statut 200
//         res.status(200).json({ message: "Données insérées avec succès", data: result });
//     });
// });


// // Route pour supprimer un contact
// app.delete("/api/delete/:id", (req, res) => {
//     const { id } = req.params;
//     const query = 'DELETE FROM contact WHERE id = ?';
//     db.query(query, [id], (error, result) => {
//         if (error) {
//             console.error('Erreur lors de la suppression du contact:', error);
//             res.status(500).json({ error: 'Erreur lors de la suppression du contact.' });
//         } else if (result.affectedRows === 0) {
//             res.status(404).json({ error: 'Contact introuvable.' });
//         } else {
//             res.status(200).json({ message: 'Contact supprimé avec succès.' });
//         }
//     });
// });


// app.listen(8000)