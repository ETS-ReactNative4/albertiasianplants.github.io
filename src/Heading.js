import React from 'react';
import Radium from 'radium';
import { pageWidthStyle } from './Styles';
import LogoMenu from './LogoMenu';

const Heading = () =>
    <heading style={pageWidthStyle}>
        <LogoMenu />
    </heading>;

export default Radium(Heading);