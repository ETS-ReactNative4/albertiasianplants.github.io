import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MenuItem = (props) =>
  <Link to={props.to}>
    <li style={{
      padding: '1em',
    }}>
      {props.children}
    </li>
  </Link>

const MainMenu = (props) =>
  <ul {...props} style={[
    {
      padding: 0,
      margin: props.margin || 0,
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'row',
    },
    props.topRight && {
      position: 'absolute',
      top: '1em',
      right: 0,
    }
  ]}>
    <MenuItem to="/plants">Plants</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/contact">Contact</MenuItem>
  </ul>;

export default Radium(MainMenu);
