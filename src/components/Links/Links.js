import { Button } from "../Button";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLinks } from '../../redux';

import {
  LinksSection,
  LinksWrapper,
  LinksHeading,
  LinksContainer,
  LinksCard,
  LinksCardInfo,
  LinksCardIcon,
  LinksCardPlan,
  LinksCardCost,
  LinksCardLength,
  LinksCardFeatures,
  LinksCardFeature,
} from "./Links.elements";

// import links from './links.json';
import Image from 'react-bootstrap/Image'

function Links({linkData, fetchLinks}) {

  useEffect(() => {
    fetchLinks()
}, [])
console.log(linkData)

return linkData.loading ? (
  <h2>Loading</h2>
) : linkData.error ? (
  <h2>{linkData.error}</h2>
) : (
  <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <LinksSection>
        <LinksWrapper>
          <LinksHeading>Links</LinksHeading>
          <LinksContainer>

            {
              linkData && linkData.links && linkData.links.map(link => (
                <LinksCard onClick={() => {window.open(link.url, '_blank');}}>
                  <LinksCardInfo>
                    <LinksCardIcon>
                      <GiRock />
                    </LinksCardIcon>
                    <LinksCardFeatures>
                      <LinksCardFeature>{link.url}</LinksCardFeature>
                    </LinksCardFeatures>
                  </LinksCardInfo>
                </LinksCard>
              ))
            }

          </LinksContainer>
        </LinksWrapper>
      </LinksSection>
    </IconContext.Provider>
)

}


const mapStateToProps = state => {
  return {
      linkData: state.link
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchLinks: () => dispatch(fetchLinks())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Links)
