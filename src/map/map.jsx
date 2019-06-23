import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Card, PageContainer, PageTitle } from '../commons/styles';
import SideBar from '../commons/sidebar';
import MapPin from './map-pin';

import MapBackground from '../images/map.png';

const MapContainer = styled(PageContainer)`
`;

const MapBackgroundContainer = styled.img`
  margin-top: 1rem;
  display: flex;
  align-self: center;
  width: 60rem;
  box-shadow: 0 0 1px 2px #070766;
`;

export const MapTitle = styled(Card)`
  padding: 0.6rem 1rem;
  text-align: center;
  width: auto;
  font-size: 1.2rem;
  color: #070766;
`;

class Map extends Component {
  render() {
    return (
      <Fragment>
        <SideBar />
        <MapContainer>
          <PageTitle>Gaea</PageTitle>
          <MapPin
            location='Ancient Forest'
            top={'226'}
            left={'-224'}
            path={'/map/ancient-forest'}
            history={this.props.history}
          />
          <MapPin
            location='Bone Village'
            top={'-90'}
            left={'-1'}
            path={'/map/bone-village'}
            history={this.props.history}
          />
          <MapPin
            location='Chocobo Farm'
            top={'80'}
            left={'300'}
            path={'/map/chocobo-farm'}
            history={this.props.history}
          />
          <MapPin
            location='Chocobo Sage'
            top={'-164'}
            left={'-40'}
            path={'/map/chocobo-sage'}
            history={this.props.history}
          />
          <MapPin
            location='Cosmo Canyon'
            top={'218'}
            left={'-254'}
            path={'/map/cosmo-canyon'}
            history={this.props.history}
          />
          <MapPin
            location='Costa del Sol'
            top={'30'}
            left={'-50'}
            path={'/map/costa-del-sol'}
            history={this.props.history}
          />
          <MapPin
            location='Forgotten Capital'
            top={'-121'}
            left={'16'}
            path={'/map/forgotten-capital'}
            history={this.props.history}
          />
          <MapPin
            location='Fort Condor'
            top={'186'}
            left={'177'}
            path={'/map/fort-condor'}
            history={this.props.history}
          />
          <MapPin
            location='Goblin Island'
            top={'-100'}
            left={'340'}
            path={'/map/goblin-island'}
            history={this.props.history}
          />
          <MapPin
            location='Gold Saucer'
            top={'127'}
            left={'-127'}
            path={'/map/gold-saucer'}
            history={this.props.history}
          />
          <MapPin
            location='Gongaga'
            top={'232'}
            left={'-155'}
            path={'/map/gongaga'}
            history={this.props.history}
          />
          <MapPin
            location='Great Glacier'
            top={'-185'}
            left={'-104'}
            path={'/map/great-glacier'}
            history={this.props.history}
          />
          <MapPin
            location='Icicle Inn'
            top={'-155'}
            left={'-102'}
            path={'/map/icicle-inn'}
            history={this.props.history}
          />
          <MapPin
            location='Junon'
            top={'110'}
            left={'58'}
            path={'/map/junon'}
            history={this.props.history}
          />
          <MapPin
            location='Kalm'
            top={'-13'}
            left={'168'}
            path={'/map/kalm'}
            history={this.props.history}
          />
          <MapPin
            location={`Lucrecia's Cave`}
            top={'95'}
            left={'-190'}
            path={'/map/lucrecias-cave'}
            history={this.props.history}
          />
          <MapPin
            location='Mideel'
            top={'303'}
            left={'234'}
            path={'/map/mideel'}
            history={this.props.history}
          />
          <MapPin
            location='Midgar'
            top={'15'}
            left={'113'}
            path={'/map/midgar'}
            history={this.props.history}
          />
          <MapPin
            location={'Nibelheim'}
            top={'75'}
            left={'-227'}
            path={'/map/nibelheim'}
            history={this.props.history}
          />
          <MapPin
            location={'North Corel'}
            top={'36'}
            left={'-168'}
            path={'/map/north-corel'}
            history={this.props.history}
          />
          <MapPin
            location='Northern Crater'
            top={'-285'}
            left={'-87'}
            path={'/map/northern-crater'}
            history={this.props.history}
          />
          <MapPin
            location={'Rocket Town'}
            top={'20'}
            left={'-262'}
            path={'/map/rocket-town'}
            history={this.props.history}
          />
          <MapPin
            location='Round Island'
            top={'-326'}
            left={'395'}
            path={'/map/round-island'}
            history={this.props.history}
          />
          <MapPin
            location='Sunken Gelnika'
            top={'130'}
            left={'-82'}
            path={'/map/sunken-gelnika'}
            history={this.props.history}
          />
          <MapPin
            location='Temple of the Ancients'
            top={'234'}
            left={'59'}
            path={'/map/temple-of-the-ancients'}
            history={this.props.history}
          />
          <MapPin
            location={'Wutai'}
            top={'-92'}
            left={'-435'}
            path={'/map/wutai'}
            history={this.props.history}
          />
          <MapBackgroundContainer src={MapBackground} alt="Map" />
        </MapContainer>
      </Fragment>
    );
  };
}

export default Map;