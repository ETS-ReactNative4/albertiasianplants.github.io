import Radium from 'radium';
import React from 'react';

const optimalTextWidthRem = 30;
const pageMarginRem = 3;
const pageWidth = optimalTextWidthRem * 2 + "rem";
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

const Page = Radium((props) => 
<div {...props} style={pageStyle}>
  {props.children}
</div>);

const Section = Radium((props) => 
<section {...props} style={pageWidthStyle}>
  {props.children}
</section>)

export {
  pageWidthStyle,
  Page,
  Section,
  optimalTextWidthRem,
};
