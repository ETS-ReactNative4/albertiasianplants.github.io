import React from 'react';
import { Parallax } from 'react-parallax';
import heroBackground from './bamboo.jpg';
import './Landing.css';
import Header from "./Header";

function Story({children}) {
  return children;
}

export default function Landing() {
  return <section className="page">
    
    <Header/>

    <Parallax bgImage={heroBackground} strength={200} className="full-width">
      <div className='hero full-width'
           style={{
        background: "rgba(0,0,0,0.5)"
        
      }}>
        <h1>
          60 years of experience in the flower and plant trade
        </h1>
        <p>
          We provide personal service for individuals and companies looking to buy Asian plants in bulk. Throw us an email and we will get back to you within 24 hours.
        </p>
      </div>
    </Parallax>

    <Story>
      <h2>Back in action!</h2>

      <p>
        After one lazy year without plant contact I am back in the trade market again. I love this branch and can not live without it.
      </p>

      <p>
        This time I am not alone — I am very pleased to have my son Thomas joining me. Thomas is a reliable, positive and structured person so he will be well prepared for this tricky business. I will teach him all I know before age catches up with me. I have worked with Thomas before and seen that he already has a solid plant nursery education. Together we have more than 60 years of experience in the plant and flower trade.
      </p>

      <p>
        The entire Alberti family has a long legacy in most areas of the flower and plant industry — from import and export to running our own nursery and garden center and several plant and flower shops in Stockholm. We had the famous Jungleboat, "Djungelbåten", a 40 meter greenhouse barge right in the middle of Stockholm City.
      </p>

      <p>
        The last 35 years I also founded and ran Asian Cuttings in Sri Lanka and Siam Plant in Bangkok.
      </p>

      <p>
        Now, Thomas and I have decided to gather all our eggs in one basket. We will represent one of the oldest, most experienced farms in Sri Lanka — the Ramya Horticulture. This top notch farm produces rooted and unrooted cuttings as well as an assortment of different potplants and they even run their own laboratory.
      </p>

      <p>
        In Thailand we have a partnership with a fellow family business — TOC Thai orchids, the largest cut orchid and plant exporter.
      </p>

      <p>
        We look forward to supplying all kinds of tropical plants from seeds to full size trees and palms to customers all over the world — old and new friends!
      </p>

      <p>
        Welcome to Alberti Asian Plants!
      </p>

      <p className='hand-writing'>
        Harald
      </p>
    </Story>
    
  </section>
}
