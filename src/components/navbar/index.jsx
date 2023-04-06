import React from "react";
import {Container, Wrapper, Section, Logo, Link, Main} from './style'
import {  Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
// import logoimg from '../../assets/icons/logo.svg'


export const Navbar =()=>{
  const navigate = useNavigate()
  return(
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate('/home')} logo>
            <Logo /> <h3>Housing</h3>
          </Section>
          <Section>
            {
              navbar.map(({ path, title } ,index)=>{
                return <Link key={index} className={({ isActive }) => isActive && 'active'}  to={path}>{title}</Link>
              })
            }
          </Section>
          <Section>
            <button>sign up</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}
export default Navbar