import React from "react";
import { Dropdown } from "antd";
import {Container, Wrapper, Section, Logo, Link, Main} from './style'
import {  Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generics/Button";
import Filter from "../Filter";
import Footer from "../Footer";



export const Navbar =()=>{
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const onClick = ()=>{
    navigate('/signin')
  }
 const menu = (
  <div>hey</div>
 )
  return(
    <>
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
          {/* <Section>
            <Button onClick={onClick} type='dark'>Login</Button>
          </Section> */}
            <Section>
              {token ? (
                <Dropdown
                  overlay={menu}
                  placement="topRight"
                  arrow={{
                    pointAtCenter: true,
                  }}
                  trigger="click"
                >
                  <Button type="dark">
                    <div>Profile</div>
                  </Button>
                </Dropdown>
              ) : (
                <Button onClick={onClick} type="dark">
                  Sign In
                </Button>
              )}
            </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
     <Footer/>
    </Container>
            </>
  )
}
export default Navbar