/**
 * Created by Daniel Schlaug on 2018-04-06.
 */

import logo from './wide logo bw.svg';
import React from 'react';
import PropTypes from 'prop-types';
import {contentWidthRem} from './Styles';
import MainMenu from './MainMenu';

export default function Header() {
  return <header style={
    {
      width: 'auto',
      maxWidth: contentWidthRem + 'rem',
      display: 'flex',
      flexDirection: 'row',
      flexAlign: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <img src={logo}
         style={{
           height: '4rem',
           margin: '2rem 0',
         }}
         alt='Alberti Asian Plants Bamboo Shoot Logo'/>
    <MainMenu/>
  </header>;
}

Header.propTypes = {
  width: PropTypes.string,
  inverted: PropTypes.bool,
  hideLogo: PropTypes.bool,
};

