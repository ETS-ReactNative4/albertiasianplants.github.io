import styled from 'styled-components';
import Radium from 'radium';
import React from 'react';

const optimalTextWidthRem = 30;
const contentWidthRem = 60;


const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Page = Radium((props) => <div {...props} style={pageStyle}>
  {props.children}
</div>);

const Section = styled.section`
  width: 100%;
  max-width: ${optimalTextWidthRem * 2}rem;
  padding: 3rem;
`;

export {
  Page,
  Section,
  optimalTextWidthRem,
  contentWidthRem,
};
