/**
 * Created by Daniel Schlaug on 2018-04-06.
 */

import logo from './wide logo bw.svg';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

export default function Header({width, inverted, hideLogo, floating}) {
  return <header style={
    {
      width: width || 'var(--page-width)',
      display: 'flex',
      flexDirection: 'row',
      flexAlign: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: floating ? 'absolute' : 'static',
      top: '1rem',
      right: '1rem',
    }}>
    <img src={logo}
         style={{
           height: '4rem',
           opacity: hideLogo ? 0 : 1,
           display: hideLogo ? 'none' : 'block',
           margin: '2rem 0',
         }}
         alt='Alberti Asian Plants Bamboo Shoot Logo'/>
    <Menu inverted={inverted}
          secondary={inverted}
          style={{margin:0}}>
      <Menu.Item as={Link} to="/plants">Plants</Menu.Item>
      <Menu.Item as={Link} to="/about">About</Menu.Item>
      <Menu.Item as={Link} to="/contact">Contact</Menu.Item>
    </Menu>
  </header>;
}

Header.propTypes = {
  width: PropTypes.string,
  inverted: PropTypes.bool,
  hideLogo: PropTypes.bool,
};
