import React from 'react';
import './SerenaEnergie77.css';
import { useNavigate } from 'react-router-dom';

function SerenaEnergie77() {
  const navigate = useNavigate();

  return (
    <div className="seo77-container">
      <video autoPlay muted loop className="background-video">
        <source src="/video77.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <div className="top-buttons">
          <button className="btn blue" onClick={() => navigate('/particuliers')}>Particuliers</button>
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
            <p>Optimisez votre confort et réduisez vos factures en isolant vos combles et vos murs.</p>
          </div>
          <div className="block">
            <img src="/maisphoto.jpg" alt="Photovoltaïque" />
            <h2>Panneaux photovoltaïques</h2>
            <p>Produisez votre propre électricité grâce à l’énergie solaire.</p>
          </div>
          <div className="block">
            <img src="/pompeachaleur.jpg" alt="Pompe à chaleur" />
            <h2>Pompe à chaleur</h2>
            <p>Une solution éco-performante pour chauffer votre logement en Seine-et-Marne.</p>
          </div>
          <div className="block">
            <h2>Zones d’intervention</h2>
            <p>
              Chelles, Meaux, Torcy, Thorigny-sur-Marne, Brie-sur-Marne, Villiers-sur-Marne, Nogent-sur-Marne, Melun...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SerenaEnergie77;
