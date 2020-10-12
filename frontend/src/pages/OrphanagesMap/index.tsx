import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/map-marker.svg';

import { Container, AsideBar, FooterBar } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <AsideBar>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita!</p>
        </header>

        <FooterBar>
          <strong>Saquarema</strong>
          <span>Rio de Janeiro</span>
        </FooterBar>
      </AsideBar>

      <Map
        center={[-22.9042304, -42.4626358]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="/">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
