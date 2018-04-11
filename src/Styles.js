import styled from 'styled-components';

const optimalTextWidthRem = 30;
const contentWidthRem = 60;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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