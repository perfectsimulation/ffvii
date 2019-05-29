import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Card, PageContainer } from './../commons/styles';

import MapBackground from './../icons/map.png';

const MapContainer = styled(PageContainer)`
`;

const MapBackgroundContainer = styled.img`
  margin-top: 1rem;
  display: flex;
  align-self: center;
  max-width: 60rem;
  width: 100%;
  box-shadow: 0 0 1px 2px #070766;
`;

const MapTitle = styled(Card)`
  padding: 0.6rem 1rem;
  text-align: center;
  width: auto;
  font-size: 1.2rem;
`;

class Map extends Component {
  render() {
    return (
      <Fragment>
        <MapContainer>
          <MapTitle>World Map</MapTitle>
          <MapBackgroundContainer src={MapBackground} alt="Map" />
        </MapContainer>
      </Fragment>
    );
  };
}

export default Map;