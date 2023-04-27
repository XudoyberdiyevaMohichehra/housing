import styled from "styled-components";
import {ReactComponent as logoimg} from '../../assets/icons/logo.svg'
import { NavLink } from "react-router-dom";

export const Container = styled.div`
 display:flex;
 flex-direction:column;
`
export const Main = styled.div`
 display:flex;
 justify-content:center;
 background:var(--colorPrimary) ;
`
export const Wrapper = styled.div`
 color:#fff;
 font-size:16px;
 height: 64px;
 padding:var(--padding);
 display:flex;
 align-items:center;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;
`
export const Section = styled.div`
 display:flex;
 align-items:center;
 cursor: ${({logo})=> logo && 'pointer'};
 .active{
    color: yellowgreen;
 }
`
export const Logo = styled(logoimg)`
 width:50px;
 height:36px;
 & path{
   fill:#fff;  
 }
 padding-right:10px;

`
export const Link = styled(NavLink)`
 text-decoration:none;
 color:#fff;
 padding: 0 32px;
`
export const Menu = styled.div`
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 177px;
  border-radius: 4px;
`;

Menu.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  cursor: pointer;
`;
