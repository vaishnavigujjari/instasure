import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinksSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinksHeading = styled.h1`
  color: #000000;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const LinksCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 300px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const LinksCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const LinksCardIcon = styled.div`
  margin: 24px 0;
`;

export const LinksCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const LinksCardCost = styled.h4`
  font-size: 40px;
`;

export const LinksCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const LinksCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const LinksCardFeature = styled.li`
  margin-bottom: 10px;
`;
