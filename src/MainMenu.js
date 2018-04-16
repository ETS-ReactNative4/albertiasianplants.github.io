import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

const MainMenu = (props) => <Menu {...props}>
  <Menu.Item as={Link} to="/plants">Plants</Menu.Item>
  <Menu.Item as={Link} to="/about">About</Menu.Item>
  <Menu.Item as={Link} to="/contact">Contact</Menu.Item>
</Menu>;

export default MainMenu;
