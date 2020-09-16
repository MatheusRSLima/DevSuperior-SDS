import React from 'react';
import './styles.css';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as GamerImage } from '../../assets/gamer.svg';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais Jogos a galera gosta mais?
            </h1>
            <h3 className="home-text-subtitle">
                Clique no Botão abaixo e saiba quais são os jogos que os games estão escolhendo!
            </h3>
            <div className="home-actions">
                <button className="home-btn">
                    QEURO SABER QUAIS SÃO
                </button>
                <div className="home-btn-icon">
                    <ArrowIcon />
                </div>
            </div>
        </div>
        <GamerImage className="gamer-image"/>
    </div>
);

export default Home;