import React from "react";
import {Container, Wrapper, Section, Logo, Link, Main} from './style'
import {  Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generics/Button";



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
              navbar.map(({ path, title, hidden} ,index)=>{
                return !hidden && <Link key={index} className={({ isActive }) => isActive && 'active'}  to={path}>{title}</Link>
              })
            }
          </Section>
          <Section>
            <Button onClick={()=> navigate('/signin')} type='dark'>Login</Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}
export default Navbar