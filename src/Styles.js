import Radium from 'radium';
import React from 'react';

const optimalTextWidthRem = 30;
const pageMarginRem = 3;
const pageWidthRem = optimalTextWidthRem * 2;
const pageWidth = pageWidthRem + "rem";
const narrowScreenMedia = '@media (max-width:' + pageWidth + ')'

const pageWidthStyle = {
  width: pageWidth,
  margin: '0 ' + pageMarginRem + 'rem',
  [narrowScreenMedia]: {
    width: "calc(100% - " + pageMarginRem + 'rem)',
  }
};

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const sectionStyle = {
  textAlign: "center",
}

const Page = Radium((props) =>
  <div {...props} style={pageStyle}>
    {props.children}
  </div>);

const Section = Radium((props) =>
  <section {...props} style={[
    pageWidthStyle,
    sectionStyle,
  ]}>
    {props.children}
  </section>)

const subhead = {
  fontSize: '1.3rem',
}

export {
  pageWidthStyle,
  Page,
  Section,
  optimalTextWidthRem,
  pageWidth,
  pageWidthRem,
  subhead,
};
