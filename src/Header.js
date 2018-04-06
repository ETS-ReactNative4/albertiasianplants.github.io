/**
 * Created by Daniel Schlaug on 2018-04-06.
 */

import logo from './wide logo bw.svg';
import { Menu, Item } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import React from "react";

export default function Header() {
  return <header style={
    {
      padding: "2rem 0",
      display: "flex",
      flexDirection: "row",
      flexAlign: "center",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
    <img
      style={{
        height:'4rem',
      }} src={logo} alt='Alberti Asian Plants Bamboo Shoot Logo'/>
    <Menu>
      <Link to="/plants">
        <Item>Plants</Item>
      </Link>
      <Link to="/about">
        <Item link={true}>About</Item>
      </Link>
      <Link to="/contact">
        <Item link={true}>Contact</Item>
      </Link>
    </Menu>
  </header>
}