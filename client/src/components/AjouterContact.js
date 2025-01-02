import '../App.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AjouterContact(){

    
    const [nom, setNom] = useState("");
    const [mail, setMail] = useState("");
    const [tel, setTel] = useState("");

    const [formData, setFormData] = useState({
        nom: "",
        mail: "",
        tel: "",
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handlePhoneChange = (value) => {
        setFormData((prev) => ({
          ...prev,
          tel: value, // Mise à jour uniquement du champ téléphone
        }));
      };

      


    const handleSubmit=(e)=>{

      e.preventDefault();
      console.log("Données soumises :", formData);

    
      axios.post("http://localhost:8000/api/post",{nom,mail,tel}).then(()=>{
        alert("Données envoyées avec succès !");
            setNom("")
            setMail("")
            setTel("")
            console.log("Données envoyées avec succès !");

        }).catch((error)=>{
          console.error("Erreur lors de l'envoi des données :", error);
          alert("Une erreur est survenue !");

        })
    }


    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
      };

      const formContainerStyle = {
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
      };

      const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        boxSizing: 'border-box',
      }; 
      
      const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        textAlign: 'left',  
        width: '100%',
      };

      const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#619caf',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px',
      };

      const phoneInputStyle = {
        ...inputStyle,
        paddingLeft: '50px', // Espace pour le drapeau et le préfixe
      };
    

    return(
        <>
<div className="App" style={pageStyle}>
      <div style={formContainerStyle}>
        <form 
        onSubmit={handleSubmit} 
        >
          <div>
            <label style={labelStyle}>Nom :</label>
            <input
            type="text"
            placeholder="Entrez le nom"
            name="nom"
            value={FormData.nom}
            onChange={handleInputChange}
            required
            style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Email :</label>
            <input
            type="email"
            placeholder="Entrez l'email"
            name="mail"
            value={FormData.mail}
            onChange={handleInputChange}
            required
            style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Téléphone :</label>
            <PhoneInput
              country={'fr'}
              value={FormData.tel}
              name="tel"
              onChange={(value) => handlePhoneChange(value)}
              inputStyle={phoneInputStyle}
              buttonStyle={{
                backgroundColor: 'transparent',
                border: 'none',
                paddingLeft: '10px'
              }}
              dropdownStyle={{
                width: '300px'
              }}
              prefix="+"
              disableCountryCode={false}
              countryCodeEditable={false}
            />
          </div>
            {/* <link to="/"> */}
            <button type="submit" style={buttonStyle}  >Ajouter</button>
            {/* </link> */}
        </form>
      </div>
    </div>
        </>
    )
}