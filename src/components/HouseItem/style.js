import styled from "styled-components";

import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as like } from "../../assets/icons/love.svg";

import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";

import { ReactComponent as resize } from "../../assets/icons/resize.svg";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    background: #ffffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;

    gap: 24px;
  }
  
`;
export const Wrapper = styled.div`
  padding: var(--padding);
  max-width: var(--width);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  display: flex;
  padding-top: 24px;
`;

export const Section = styled.div`
  display:flex;
  justify-content:space-between;
`;
export const Content = styled.div`
  display:flex;
  flex-direction:${({flex})=> !flex ? 'column' : 'row'};
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  `;
Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px 0;
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

export const Icons = styled.div``;

Icons.Share = styled(share)`
  display: flex;
  padding: 8px;
  background-color: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

Icons.Like = styled(like)`
  display: flex;
  padding: 8px;
  background-color: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

Icons.Resize = styled(resize)``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;

Icons.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

export const Description = styled.div`
  margin-top: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 48px;
`;