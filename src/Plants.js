/**
 * Created by Daniel Schlaug on 2018-04-06.
 */

import React from "react";
import Radium from 'radium';
import Heading from "./Heading";
import { Page, subhead, Section, pageWidthRem } from './Styles';
import PlantPhotos from './PlantPhotos';
import * as styles from './Styles';

const PlantImage = Radium(({name, filename}) =>
  <div style={{
    width: (pageWidthRem - 4) / 3 + 'rem',
    height: (pageWidthRem - 4) / 3 + 'rem',
    background: `url('${'/photos/plants/' + filename}') no-repeat center center`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column-reverse',
    borderRadius: styles.borderRadius,
    margin: '1rem',
    overflow: 'hidden',
    '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
  }}>
  <div style={[
    {
      padding: '.7em',
    },
    styles.blurredGlass,

  ]}>{name}</div>
  </div>);

const Plants = () =>
  <Page>
    <Heading />
    <Section>
      <h1>Plants.</h1>
      <h2 style={subhead}>Examples from our assortment.</h2>
      <p>This is far from all of our plants. Feel free to ask us for anything you are unable to find here.</p>
      <styles.WidgetGroup widgetMargin='1rem'>
      {PlantPhotos.plants.map(({name, filename}) => <PlantImage name={name} filename={filename} />)}
      </styles.WidgetGroup>
    </Section>
  </Page>

export default Plants