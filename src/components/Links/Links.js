import React from "react";
import { Button } from "../Button";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
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

import links from './links.json';
import Image from 'react-bootstrap/Image'

function Links() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <LinksSection>
        <LinksWrapper>
          <LinksHeading>Links</LinksHeading>
          <LinksContainer>

            {
              links.map(link => (
                <LinksCard onClick={() => {window.open(link.url, '_blank');}}>
                  <LinksCardInfo>
                    <LinksCardIcon>
                      <GiRock />
                    </LinksCardIcon>
                    <LinksCardFeatures>
                      <LinksCardFeature>{link.name}</LinksCardFeature>
                    </LinksCardFeatures>
                  </LinksCardInfo>
                </LinksCard>
              ))
            }


            {/* <LinksCard to="/sign-up">
              <LinksCardInfo>
                <LinksCardIcon>
                  <GiRock />
                </LinksCardIcon>
                <LinksCardFeatures>
                  <LinksCardFeature>Retargeting analytics</LinksCardFeature>
                </LinksCardFeatures>
                <Button primary>Learn more</Button>
              </LinksCardInfo>
            </LinksCard>

            <LinksCard to="/sign-up">
              <LinksCardInfo>
                <LinksCardIcon>
                  <GiRock />
                </LinksCardIcon>
                <LinksCardFeatures>
                  <LinksCardFeature>Retargeting analytics</LinksCardFeature>
                </LinksCardFeatures>
                <Button primary>Learn more</Button>
              </LinksCardInfo>
            </LinksCard>

            <LinksCard to="/sign-up">
              <LinksCardInfo>
                <LinksCardIcon>
                  <GiRock />
                </LinksCardIcon>
                <LinksCardFeatures>
                  <LinksCardFeature>Retargeting analytics</LinksCardFeature>
                </LinksCardFeatures>
                <Button primary>Learn more</Button>
              </LinksCardInfo>
            </LinksCard>

            <LinksCard to="/sign-up">
              <LinksCardInfo>
                <LinksCardIcon>
                  <GiRock />
                </LinksCardIcon>
                <LinksCardFeatures>
                  <LinksCardFeature>Retargeting analytics</LinksCardFeature>
                </LinksCardFeatures>
                <Button primary>Learn more</Button>
              </LinksCardInfo>
            </LinksCard>
            <LinksCard to="/sign-up">
              <LinksCardInfo>
                <LinksCardIcon>
                  <GiRock />
                </LinksCardIcon>
                <LinksCardFeatures>
                  <LinksCardFeature>Retargeting analytics</LinksCardFeature>
                </LinksCardFeatures>
                <Button primary>Learn more</Button>
              </LinksCardInfo>
            </LinksCard>
            <LinksCard to="/sign-up">
              <LinksCardInfo>
                <LinksCardIcon>
                  <GiRock />
                </LinksCardIcon>
                <LinksCardFeatures>
                  <LinksCardFeature>Retargeting analytics</LinksCardFeature>
                </LinksCardFeatures>
                <Button primary>Learn more</Button>
              </LinksCardInfo>
            </LinksCard>
            <LinksCard to="/sign-up">
              <LinksCardInfo>
                <LinksCardIcon>
                  <GiRock />
                </LinksCardIcon>
                <LinksCardFeatures>
                  <LinksCardFeature>Retargeting analytics</LinksCardFeature>
                </LinksCardFeatures>
                <Button primary>Learn more</Button>
              </LinksCardInfo>
            </LinksCard> */}
          </LinksContainer>
        </LinksWrapper>
      </LinksSection>
    </IconContext.Provider>
  );
}
export default Links;
