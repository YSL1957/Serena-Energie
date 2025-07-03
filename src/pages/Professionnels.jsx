import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Professionnels.css';

function Professionnels() {
  const navigate = useNavigate();

  return (
    <div className="pro-container">
      <video className="background-video" autoPlay muted loop>
        <source src="/prophotovolt.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pro-overlay">
        <div className="phone-banner">
          <a href="tel:0629353763">📞 06 29 35 37 63</a>
        </div>

        <div className="top-buttons">
          <button className="btn blue" onClick={() => navigate('/particuliers')}>Particuliers</button>
          <button className="btn green" onClick={() => navigate('/professionnels')}>Professionnels</button>
        </div>

        <img src="/logo.png" alt="Logo Serena Énergie" className="logo-pro" />

        <div className="services">
          <div className="card">
            <img src="/audipro.jpeg" alt="Audit énergétique" />
            <h2>Audit énergétique</h2>
            <p>Analyse complète pour réduire vos dépenses énergétiques professionnelles.</p>
          </div>

          <div className="card">
            <img src="/photoproaltaïque.jpg" alt="Photovoltaïque pro" />
            <h2>Photovoltaïque en toiture</h2>
            <p>Valorisez votre toiture avec du solaire rentable.</p>
          </div>

          <div className="card">
            <img src="/destratificateurpro.webp" alt="Rénovation thermique" />
            <h2>Rénovation thermique</h2>
            <p>Optimisez le chauffage de vos locaux grâce à des destratificateurs performants.</p>
          </div>

          <div className="card no-image">
            <h2>CEE Professionnels</h2>
            <p>
              Nous vous accompagnons dans l’obtention des aides CEE pour financer vos travaux.
              Serena Énergie s’occupe de toutes les démarches administratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professionnels;
