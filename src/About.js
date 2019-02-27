import React from 'react';
import {optimalTextWidthRem, Page, Section} from './Styles';
import Heading from './Heading';

const lineHeight = 1.5;

const About = () =>
  <Page>
    <Heading/>
    <Section>
      <div style={{
        fontSize: '1.2rem',
        margin: '3rem auto',
        width: (1.5 * optimalTextWidthRem) + 'rem',
        textAlign: 'left',
      }}>
        <h2>Back in action!</h2>

        <p style={{lineHeight: lineHeight}}>
          After one lazy year without plant contact I am back in the
          trade market again. I love this branch and can not live
          without it.
        </p>

        <p style={{lineHeight: lineHeight}}>
          This time I am not alone — I am very pleased to have my son
          Thomas joining me. Thomas is a reliable, positive
          and structured person so he will be well prepared for this
          tricky business. I will teach him all I know before
          age catches up with me. I have worked with Thomas before
          and seen that he already has a solid plant nursery
          education. Together we have more than 60 years of
          experience in the plant and flower trade.
        </p>

        <p style={{lineHeight: lineHeight}}>
          The entire Alberti family has a long legacy in most
          areas of the flower and plant industry — from import and
          export to running our own nursery and garden center
          and several plant and flower shops in Stockholm. We had the
          famous Jungleboat, "Djungelbåten", a 40 meter greenhouse
          barge right in the middle of Stockholm City.
        </p>

        <p style={{lineHeight: lineHeight}}>
          The last 35 years I also founded and ran Asian Cuttings
          in Sri Lanka and Siam Plant in Bangkok.
        </p>

        <p style={{lineHeight: lineHeight}}>
          Now, Thomas and I have decided to gather all our eggs
          in one basket. We will represent the leading farms in Sri Lanka.
        </p>

        <p style={{lineHeight: lineHeight}}>
          In Thailand we have a partnership with a fellow family
          business — TOC Thai orchids, the largest cut orchid and
          plant exporter.
        </p>

        <p style={{lineHeight: lineHeight}}>
          We look forward to supplying all kinds of tropical plants
          from seeds to full size trees and palms to customers
          all over the world — old and new friends!
        </p>

        <p style={{lineHeight: lineHeight}}>
          Welcome to Alberti Asian Plants!
        </p>

        <p className='hand-writing'>
          Harald
        </p>
      </div>
    </Section>
  </Page>;

export default About;
