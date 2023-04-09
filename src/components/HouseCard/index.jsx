import React from "react";
import noimg from '../../assets/img/noimg.jpeg'
import { Container, Img, Content, Details, Icons,  Divider } from './style'


export const HouseCard =({url, title, bed, bath, garage, ruler})=>{
  return(
    <Container>
      <Img src={url || noimg}/>
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{title || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Details>
          <Details.Items footer>
            <Icons.Bed />
            <div className="info">Bed {bed || 0}</div>
          </Details.Items>
          <Details.Items footer>
            <Icons.Bath />
            <div className="info">Bath {bath || 0}</div>
          </Details.Items>
          <Details.Items footer>
            <Icons.Garage />
            <div className="info">Garage {garage || 0}</div>
          </Details.Items>
          <Details.Items footer>
            <Icons.Ruler />
            <div className="info">Ruler {ruler || 0}</div>
          </Details.Items>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Items footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
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