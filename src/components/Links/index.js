import React from "react";
import {
  LinksContainer,
  LinksCard,
  LinksH1,
  LinksH2,
  LinksIcon,
  LinksP,
  LinksWrapper,
} from "./LinksElements";
import icon1 from "./icon1.jpg";
import icon2 from "./icon2.jpg";
import icon3 from "./icon3.jpg";

const Links = () => {
  return (
    <LinksContainer id="links">
      <LinksH1>Links</LinksH1>
      <LinksWrapper>
        <LinksCard>
          <LinksIcon src={icon1} />
          <LinksH2>Reduce expenses</LinksH2>
          <LinksP>
            We help reduce your fees and increase your overall revenue.
          </LinksP>
        </LinksCard>
        <LinksCard>
          <LinksIcon src={icon2} />
          <LinksH2>Virtual Offices</LinksH2>
          <LinksP>You can access our platform online </LinksP>
        </LinksCard>
        <LinksCard>
          <LinksIcon src={icon3} />
          <LinksH2>Premium benefits</LinksH2>
          <LinksP>
            unlock our special membership card that return 4% cashback
          </LinksP>
        </LinksCard>
      </LinksWrapper>
    </LinksContainer>
  );
};

export default Links;
