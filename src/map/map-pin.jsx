import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import PinIcon from '../icons/map-pin.png';

const MapPinContainer = styled.div`
  position: absolute;
  height: 0;
  width: 0;
`;

const MapPinIcon = styled.img`
  position: absolute;
  z-index: 1;
  height: 2rem;
  width: 2rem;
  cursor: pointer;

  top: ${props => props.top};
  left: ${props => props.left};
`;

const MapPinTitleBanner = styled.div`
  position: absolute;
  z-index: 2;
  padding: 0.2rem;
  top: ${props => props.top};
  left: ${props => props.left};
  background: #070766;
  box-shadow: 0 0 1px 2px #070766;
  white-space: nowrap;
  font-size: 1rem;
  color: ghostwhite;
`;

class MapPin extends Component {
  constructor() {
    super();
    this.state = {
      showTitleBanner: false,
    };
  };

  goTo = (path) => {
    this.props.history.push(path);
  };

  toggleTitleBanner = () => {
    this.setState((prevState) => ({
      showTitleBanner: !prevState.showTitleBanner,
    }));
  };

  render() {
    const pinTopPosition = Number(this.props.top)/16;
    const pinLeftPosition = Number(this.props.left)/16;
    const bannerTopPosition = Number(this.props.top)/16 - 20/16;
    const bannerLeftPosition = Number(this.props.left)/16 - 30/16;

    return (
      <Fragment>
        <MapPinContainer
          onMouseOver={this.toggleTitleBanner}
          onMouseOut={this.toggleTitleBanner}
          onClick={() => this.goTo(this.props.path)}
        >
          {this.state.showTitleBanner &&
          <MapPinTitleBanner
            top={bannerTopPosition+'rem'}
            left={bannerLeftPosition+'rem'}
          >
            {this.props.location}
          </MapPinTitleBanner>
          }
          <MapPinIcon src={PinIcon} alt-={this.props.location}
            top={pinTopPosition+'rem'}
            left={pinLeftPosition+'rem'}
          />
        </MapPinContainer>
      </Fragment>
    );
  };
};

export default MapPin;