import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Particuliers.css';

function Particuliers() {
  const navigate = useNavigate();

  return (
    <div className="particuliers-container">
      <video autoPlay muted loop className="background-video">
        <source src="/maisonphotov.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <div className="top-buttons">
          <button className="btn blue active">Particuliers</button>
          <button className="btn green" onClick={() => navigate('/professionnels')}>Professionnels</button>
        </div>

        <div className="phone-banner">
          <a href="tel:0629353763">📞 06 29 35 37 63</a>
        </div>

        <img src="/logo.png" alt="Logo Serena Énergie" className="logo" />

        <div className="content-blocks">
          <div className="block">
            <img src="/isolmaiso.jpg" alt="Isolation" />
            <h2>Isolation thermique</h2>
            <p>Améliorez le confort de votre maison tout en réduisant vos factures.</p>
          </div>
          <div className="block">
            <img src="/maisphoto.jpg" alt="Photovoltaïque" />
            <h2>Panneaux photovoltaïques</h2>
            <p>Produisez votre propre électricité grâce à l’énergie solaire.</p>
          </div>
          <div className="block">
            <img src="/pompeachaleur.jpg" alt="Pompe à chaleur" />
            <h2>Pompe à chaleur</h2>
            <p>Une solution performante et écologique pour le chauffage.</p>
          </div>
          <div className="block">
            <h2>MaPrimeRénov'</h2>
            <p>Nous vous accompagnons dans l’obtention des aides pour financer vos travaux.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Particuliers;
