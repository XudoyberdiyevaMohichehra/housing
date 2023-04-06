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
//  gap:10px;
 cursor: ${({logo})=> logo && 'pointer'};
 .active{
    color: yellowgreen;
 }
`
export const Logo = styled(logoimg)`
 width:30px;
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