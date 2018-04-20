import Radium from 'radium';
import React from 'react';
import Logo from './Logo';
import { darkBackground } from './Colors';

export const optimalTextWidthRem = 30;
export const pageMarginRem = 3;
export const pageWidthRem = optimalTextWidthRem * 2;
export const pageWidth = pageWidthRem + "rem";
export const narrowScreenMedia = '@media (max-width:' + pageWidth + ')'

export const pageWidthStyle = {
  width: pageWidth,
  margin: '0 ' + pageMarginRem + 'rem',
  [narrowScreenMedia]: {
    width: "calc(100% - " + pageMarginRem + 'rem)',
  }
};

export const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const sectionStyle = {
  textAlign: "center",
}

export const gradientBackground = 'linear-gradient(to bottom, rgba(255,255,255,0.70), rgba(237,237,237,1))';
export const backdropFilter = 'blur(10px) saturate(200%)';
export const darkLusterColor = 'rgba(0,0,0,0.85)';
export const borderRadius = '1rem';
export const borderRadiusInner = '0.5rem';

export const shadow = { boxShadow: '0 0.15rem 0.75rem rgba(150,150,150,0.7)' };
export const hoverShadow = {
  transition: 'box-shadow 1s', 
  ':hover': {
    // transform: 'scale(1.05)',
    boxShadow: '0 0.30rem 1.5rem rgba(150,150,150,0.7)',
  },
};
export const Page = Radium((props) =>
  <div {...props} style={pageStyle}>
    {props.children}
  </div>);

export const Section = Radium((props) =>
  <section {...props} style={[
    pageWidthStyle,
    sectionStyle,
  ]}>
    {props.children}
  </section>)

export const subhead = {
  fontSize: '1.3rem',
}

export const blurredGlass = [
  CSS.supports('background', gradientBackground) && {
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.80), rgba(237,237,237,1))',
  },
  (
    CSS.supports('backdrop-filter', backdropFilter) ||
    CSS.supports('-webkit-backdrop-filter', backdropFilter)
  ) && {
    '-webkit-backdrop-filter': backdropFilter,
    backdropFilter: backdropFilter,
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.50), rgba(237,237,237,1))',
  }
];

export const WidgetGroup = Radium((props) =>
  <div style={
    {
      margin: '0 ' + ('-' + props.widgetMargin) || '-2rem',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      justifyContent: 'space-evenly'
    }
  }>
    {props.children}
  </div>
);