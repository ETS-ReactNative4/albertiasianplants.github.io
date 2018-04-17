/**
 * Created by Daniel Schlaug on 2018-04-06.
 */

import logo from './wide logo bw.svg';
import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';
import Radium from 'radium';

const contentWidth = 500;

const LogoMenu = () =>
  <div style={
    [
      {
        display: "flex",
        justifyContent: 'space-between',
        flexFlow: 'row wrap',
        alignItems: 'center',
        [`@media (max-width: ${contentWidth}px)`]:{
          flexDirection: 'column',
        }
      }
    ]
  }>
    <img src={logo}
      style={{
        height: '4rem',
        margin: '1rem 0',
      }}
      alt='Alberti Asian Plants Bamboo Shoot Logo' />
    <MainMenu margin='1rem 0' />
  </div>;

LogoMenu.propTypes = {
  width: PropTypes.string,
  inverted: PropTypes.bool,
  hideLogo: PropTypes.bool,
};

export default Radium(LogoMenu);