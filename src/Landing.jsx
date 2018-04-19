import React from 'react';
import { Parallax } from 'react-parallax';
import heroBackground from './bamboo.jpg';
import Logo from './Logo';
import { WidgetGroup, Page, pageWidthRem, subhead, pageWidthStyle, optimalTextWidthRem, borderRadius, hoverShadow } from './Styles';
import MainMenu from './MainMenu';
import Radium from 'radium';
import {Link, withRouter} from 'react-router-dom';

const Button = ({ children }) =>
  <button className='ui button'>
    {children}
  </button>

const Widget = withRouter(Radium(({
  history,
  iconSrc,
  iconDescription,
  title,
  subtitle,
  link
}) => {
const widgetMarginRem = 0.5
const widgetsPerRow = 3;
return <div style={[
  {
    margin: widgetMarginRem + 'rem',
    padding: '1.5rem',
    maxWidth: (pageWidthRem - widgetMarginRem * (widgetsPerRow-1) * 2 ) / 3 + 'rem',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: borderRadius,
  },
  hoverShadow
]}
  onClick={() => history.push(link)}>
    <img src={iconSrc} alt={iconDescription} style={{ height: "5rem" }} />
    <h1 style={{ margin: '1rem' }}>{title}</h1>
    <p>
      {subtitle}
    </p>
</div>}));

const Landing = (_, context) =>
  <Page>
    <Parallax bgImage={heroBackground}
      strength={200}
      style={{ width: '100%' }}>
      <div style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(247, 255, 239, 0.89)',
      }}>
        <section style={[
          pageWidthStyle,
          {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '5rem',


            minHeight: '40rem',
            '@media screen and (max-height: 80rem)': {
              minHeight: '50vh',
            }
          }
        ]}>
          <MainMenu inverted subtle topRight margin='1rem 0 0 0' />
          <Logo color='white' height='20em' />
        </section>
      </div>
    </Parallax>

    <div style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      maxWidth: optimalTextWidthRem * 1.5 + 'rem',
    }}>
      <h1>
        Deep roots.
      </h1>

      <p style={subhead}>
        Over 60 years of experience in the plant trade.
      </p>

      <Link to='/contact'><Button>Get in touch</Button></Link>
    </div>
    
    <WidgetGroup>
    <Widget iconSrc='/icons/about.svg'
    iconDescription='Bonsai on ship.'
    title='About us'
    subtitle="As an agent for some of Asia's top plant nurseries we provide personal service to individuals and companies
    looking to buy asian plants in bulk."
    link='/about' />
    
    <Widget iconSrc='/icons/network.svg'
        iconDescription='Three persons.'
        title='Contact'
        subtitle='We would love to hear from you. Throw us an email and we will get back to you within 48 hours.'
        link='/contact' />

    <Widget iconSrc='/icons/grass.svg'
        iconDescription='A tuft of grass.'
        title='Plants'
        subtitle='A wide assortment of plants from top nurseries in Thailand and Sri Lanka.'
        link='/plants' />
    </WidgetGroup>
  </Page>;

export default Radium(Landing);
