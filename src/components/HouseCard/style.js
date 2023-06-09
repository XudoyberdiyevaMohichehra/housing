import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  min-width: 330px;
  margin: ${({ gap }) => {
        return gap && `0 ${gap}px`;
    }};
  height: 450px;
  background: white;
  border: 1px solid #e6e9ec;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
`
export const Img = styled.img`
 width:100%;
 max-height: 220px;
 min-height: 220px;

`
export const Content = styled.div`
 padding: 16px 20px;
//  padding-top: 24px;
 display:flex;
 flex-direction: ${({ footer }) => footer ? 'row' : 'column'};
 justify-content: ${({ footer }) => footer && 'space-between' };

`
export const Details = styled.div`
 padding-top:16px;
 display:flex;
 justify-content: space-between;
 
`
Details.Items = styled.div`
 display:flex;
 flex-direction:  'column';
 flex-direction:  ${({ row }) => row ?'row' : 'column'};
 align-items: ${({ footer }) => footer && 'center'};

`

export const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
 width: 27px;
  height: 27px;
  padding: 6px;
  background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  & path {
    fill: ${({ favorite }) => favorite && "white"};
  }
  :active {
    transform: scale(0.9);
  }
`;


export const Divider = styled.div`
 background: #e6e9ec;
 height:1px;
`