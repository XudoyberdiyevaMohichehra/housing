import React from "react";
import noimg from '../../assets/img/noimg.jpeg'
import { Container, Img, Content, Details, Icons,  Divider } from './style'


export const HouseCard =({data = {}})=>{
  const { attachments, city, country, description, salePrice, price, address, houseDetails, category } = data;
  // let url = new URL(window.location.href)
  return(
    <Container>
      <Img src={(attachments && attachments[0])?.imgPath || noimg}/>
      <Content>
        <div className="subTitle inline">{city}, {country}, {description}</div>
        <div className="info">{address || 'Quincy St, Brooklyn, NY, USA'} - {category?.name || 'Category'}</div>
        <Details>
          <Details.Items footer>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0 }</div>
          </Details.Items>
          <Details.Items footer>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0}</div>
          </Details.Items>
          <Details.Items footer>
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Items>
          <Details.Items footer>
            <Icons.Ruler />
            <div className="info">Area {houseDetails?.area || 0}kv</div>
          </Details.Items>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Items footer>
          <div className="info">${salePrice}/mo</div>
          <div className="subTitle">${price}/mo</div>
        </Details.Items>
        <Details.Items footer row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Items>
      </Content>
     
    </Container>
  )
}
export default HouseCard