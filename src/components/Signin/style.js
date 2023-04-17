import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  margin:auto;

`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  gap: 30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  max-width: 530px;
  margin:64px 0;
`;

export { Container, Content };