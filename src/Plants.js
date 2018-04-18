/**
 * Created by Daniel Schlaug on 2018-04-06.
 */

import React from "react";
import Heading from "./Heading";
import { Page, subhead, Section } from './Styles';

const Plants = () =>
  <Page>
    <Heading />
    <Section>
      <h1>Plants.</h1>
      <h2 style={subhead}>Examples from our assortment.</h2>
      <p>This is far from all of our plants. Feel free to ask us for anything you are unable to find here.</p>
    </Section>
  </Page>

export default Plants