import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <video className="background-video" autoPlay muted loop>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <div className="phone-banner">
          <a href="tel:0629353763">📞 06 29 35 37 63</a>
        </div>

        <div className="top-buttons">
          <button className="btn blue" onClick={() => navigate('/particuliers')}>Particuliers</button>
          <button className="btn green" onClick={() => navigate('/professionnels')}>Professionnels</button>
        </div>

        <img src="/logo.png" alt="Logo Serena Énergie" className="logo" />

        <div className="slogan">
          <h1>Passez à l’énergie de demain</h1>
          <p>Serena Energie vous aide à équiper votre maison ou votre entreprise avec les meilleures technologies solaires et thermiques.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
