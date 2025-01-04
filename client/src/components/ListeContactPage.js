import React from 'react';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link} from "react-router-dom";

export default function ListeContactPage(){

    const [data, setData] = useState([])

    const loaddata = async()=>{

      try {
        const response = await axios.get("http://localhost:8000/api/get");
    
        if (response.data) {
          console.log("Données récupérées :", response.data);
          setData(response.data); // Stockez les données
        } else {
          console.error("Les données ne sont pas disponibles :", response);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }

    }

    useEffect(()=>{
        loaddata()
    },[]);
 

    const handleDelete = (id) => {
      if (window.confirm("Voulez-vous vraiment supprimer ce contact ?")) {
          axios.delete(`http://localhost:8000/api/delete/${id}`)
              .then(() => {
                  // Mettre à jour la liste après suppression
                  setData(data.filter((data) => data.id !== id));
                  alert("Contact supprimé avec succès.");
              })
              .catch((error) => {
                  console.error("Erreur lors de la suppression :", error);
                  alert("Une erreur s'est produite.");
              });
      }
  };

    return(
    <>
<nav class="navbar" style={{backgroundColor: "#e3f2fd"}}>
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search Contact" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

<div className='users-page'>
            <div className='container'>
                <h1>
                    Bienvenue dans Votre Repertoire.
                </h1>
                <h3>Ici vous pouvez gérer votre répertoire personnel de contact </h3>

                <div className='users-list'>
                    <div className='addNewUser'>
                       <Link to="/ajouterContact">
                       <button className='btn btn-success' 
                       style={{
                        backgroundColor:"#71a7b9"
                       }}
                       >
                            Ajouter Contact    
                        </button>   
                       </Link>  
                    </div>
                  <div>
    <table border="0" width="100%" cellPadding="10" style={{
    borderCollapse: "separate", // Important pour que border-spacing fonctionne
    borderSpacing: "0 10px" 
    }}>
        
        <tr style={{
        backgroundColor:"#71a7b9",
         padding: "10px"
      }} >
            <th>Id</th>
            <th>Nom</th>
            <th>mail</th>
            <th>tel</th>
            <th>Actions</th>
          </tr>
          {data.map((da) => (
            <tr key={da.id}>
              <td>{da.id}</td>
              <td>{da.nom}</td>
              <td>{da.mail}</td>
              <td>{da.tel}</td>
              <td className="action-buttons">
   
              <button className="btn btn-primary">
              <i className="fas fa-eye" style={{ marginRight: "5px" }}></i>
              </button>
              <button 
              onClick={() => handleDelete(da.id)} 
              className="btn btn-danger" style={{ marginRight: "5px",  }}>
              <i className="fas fa-trash" style={{ marginRight: "5px" }}></i> 
              </button>
              </td>
            </tr>
          ))}
      </table>
                  </div>
                </div>
            </div> 
        </div>
 </>
    )
}