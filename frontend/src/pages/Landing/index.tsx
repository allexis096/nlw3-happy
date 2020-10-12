import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Container, ContentWrapper, Location } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Saquarema</strong>
          <span>Rio de Janeiro</span>
        </Location>
        <Link to="/app">
          <FiArrowRight size={20} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
