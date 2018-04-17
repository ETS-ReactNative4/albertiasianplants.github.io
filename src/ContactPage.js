import React from 'react';
import LogoMenu from './Header';
import {Page, Section} from './Styles';
import PropTypes from 'prop-types';

const Email = ({description, email}) => <React.Fragment>
  <dt>{description}</dt>
  <dd><a href={'mailto:'+email}>{email}</a></dd>
</React.Fragment>;

Email.propTypes = {
  description: PropTypes.string.required,
  email: PropTypes.string.required,
};

const PhoneNumber = ({description, number}) => <React.Fragment>
  <dt>{description}</dt>
  <dd><a href={'tel:'+number}>{number}</a></dd>
</React.Fragment>;

PhoneNumber.propTypes = {
  description: PropTypes.string.required,
  number: PropTypes.string.required,
};

const Contact = ({name, title, phone, cellphone, email}) => <dl>
  <dt>Name</dt>
  <dd>{name}</dd>

  <dt>Title</dt>
  <dd>{title}</dd>

  {email && <Email description="Email" email={email}/>}
  {phone && <PhoneNumber description="Phone" number={phone}/>}
  {cellphone && <PhoneNumber description="Cellphone" number={cellphone}/>}
</dl>;

const ContactPage = () => <Page>
  <LogoMenu/>
  <Section>
    <Contact name="Harald" title="CEO" email="harald@albertiasianplants.com"/>
  </Section>
</Page>;

export {
  ContactPage,
};
