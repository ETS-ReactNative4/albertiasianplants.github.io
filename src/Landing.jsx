import React from 'react';
import {Parallax} from 'react-parallax';
import heroBackground from './bamboo.jpg';
import './Landing.css';
import Header from './Header';
import Logo from './Logo';
import {Button} from 'semantic-ui-react';
import {Section} from './Styles';

export default function Landing() {
  return <section className="page"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>


    <Parallax bgImage={heroBackground}
              strength={200}
              style={{width: '100%'}}>
      <div style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(247, 255, 239, 0.89)',
      }}>
        <Section className='hero'
             style={{
               position: 'relative',
               display: 'flex',
               alignItems: 'center',
             }}>
          <Header inverted hideLogo floating width="auto"/>
          <Logo color='white' height='20em'/>
        </Section>
      </div>
    </Parallax>

    <div style={{
      padding: '2em 0',
      maxWidth: 'var(--page-width)',
    }}>
      <h1>
        Over 60 years of experience in the flower and plant trade
      </h1>
      <p style={{width: '60%'}}>
        We provide personal service to individuals and companies
        looking to buy asian plants in bulk. Throw us an email
        and we will get back to you within 48 hours.
      </p>
      <Button>Get in touch</Button>
    </div>

  </section>;
}
