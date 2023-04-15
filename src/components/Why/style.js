import styled from 'styled-components';
import { ReactComponent as email } from '../../assets/icons/cardMassage.svg';
import { ReactComponent as calculator } from '../../assets/icons/calculator.svg';
import { ReactComponent as cardHouse } from '../../assets/icons/cardHouse.svg';
import { ReactComponent as cardMaps } from '../../assets/icons/cardMaps.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  background: #f5f7fc;
  width: 100%;
  margin-top:96px;
  margin:auto;
  padding:55px 0;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width:217px;
  text-align: center;
`;
const Wrapper = styled.div`
  padding:0px 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  max-width: 1440px;
  width: 100%;
  // height:400px;
  
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   align-items: center;
//   margin: auto;
//   width: 100%;
//   margin-top: 96px;
//   background: #f5f7fc;
//   padding: 48px 0;
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 235px;
//   width: 100%;
//   text-align: center;
// `;
// const Wrapper = styled.div`
//   max-width: 1440px;
//   width: 100%;
//   padding: 0px 130px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   margin-top: 40px;
//   /* height: 434px; */
// `;
const Icons = styled.div`
 
`;
Icons.Email = styled(email)`
   margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`
Icons.Calculator = styled(calculator)`
   margin-bottom: 24px;
`
Icons.CardHouse = styled(cardHouse)`
   margin-bottom: 24px;
`
Icons.CardMaps = styled(cardMaps)`
   margin-bottom: 24px;
`

export { Container, Content, Wrapper, Icons, TextWrapper };