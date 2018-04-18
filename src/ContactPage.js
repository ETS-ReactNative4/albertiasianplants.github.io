import React from 'react';
import { Page, Section } from './Styles';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Radium from 'radium';

const gradientBackground = 'linear-gradient(to bottom, rgba(255,255,255,0.70), rgba(237,237,237,1))';
const backdropFilter = 'blur(10px) saturate(200%)';
const darkLusterColor = 'rgba(0,0,0,0.85)';
const borderRadius = '1rem';
const borderRadiusInner = '0.5rem';
const buttonStyle = {
  transition: 'all 0.5s',
  margin: 0,
  display: 'flex',
  textAlign: 'center',
  padding: '0.5rem',
  margin: '0.5rem',
  borderRadius: borderRadiusInner,
  ':hover': {
    backgroundColor: 'rgba(50,50,50,0.1)',
  },
};
const iconStyle = {
  height: '1.5rem',
  marginRight: '0.4rem',
};

const Email = Radium(({ description, email }) => <React.Fragment>
  <dt style={{
    display: 'none',
  }}>{description}</dt>
  <a href={'mailto:' + email} style={{ color: darkLusterColor }}>
    <dd style={buttonStyle}>
      <img src='/icons/at.svg' alt='Email icon' style={iconStyle} />
      {email}
    </dd>
  </a>
</React.Fragment>);

Email.propTypes = {
  description: PropTypes.string.required,
  email: PropTypes.string.required,
};

const PhoneNumber = Radium(({ description, number }) => <React.Fragment>
  <dt style={{ display: 'none' }}>{description}</dt>
  <a href={'tel:' + number} style={{ color: darkLusterColor }}>
    <dd style={buttonStyle} >
      <img src='/icons/phone-call.svg' alt='Phone icon' style={iconStyle} />
      {number}
    </dd>
  </a>
</React.Fragment>);

PhoneNumber.propTypes = {
  description: PropTypes.string.required,
  number: PropTypes.string.required,
};

const Contact = Radium(({ name, title, phone, cellphone, email }) =>
  <dl style={[
    {
      transition: 'all 0.5s',
      display: 'inline-block',
      padding: '1.5rem 2rem',
      margin: '0 2rem 2rem 2rem',
      borderRadius: borderRadius,
      background: 'rgba(220,220,220,0.80)',
      boxShadow: '0 0.15rem 0.75rem rgba(150,150,150,0.7)',
      ':hover': {
        // transform: 'scale(1.05)',
        boxShadow: '0 0.30rem 1.5rem rgba(150,150,150,0.7)',
      },
    },
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
  ]}>
    <dt style={{ display: 'none' }}>Name</dt>
    <dd style={{
      margin: '0 auto 1rem auto',
      fontSize: '2rem',
      fontWeight: 'ligth',
      textAlign: 'center',
      color: darkLusterColor,
    }}>
      {name}
    </dd>

    <dt style={{ display: 'none' }}>Title</dt>
    <dd style={{
      fontSize: '1rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'rgba(0,0,0,0.5)',
      margin: '1rem auto 1rem auto',
    }}>
      {title}
    </dd>

    {email && <Email description="Email" email={email} />}
    {phone && <PhoneNumber description="Phone" number={phone} />}
    {cellphone && <PhoneNumber description="Cellphone" number={cellphone} />}
  </dl >);

const ContactPage = () =>
  <Page>
    <Heading />
    <Section>
      <img src='/photos/harald-and-thomas.jpg' alt='Harald and Thomas in the greenhouse.' style={{ width: '100%' }} />
      <div style={{
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginTop: '-5.9rem',
      }}>
        <Contact name="Harald Alberti" title="Senior" email="harald@albertiasianplants.com" phone="+46 (0) 8-604 090 54" cellphone="+46 (0) 70-814 75 21" />
        <Contact name="Thomas Alberti" title="Assistant" email="thomas@albertiasianplants.com" />
      </div>
    </Section>
  </Page>;

export {
  ContactPage,
};
