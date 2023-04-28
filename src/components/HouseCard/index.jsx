import React from "react";
import noimg from '../../assets/img/noimg.jpeg'
import { Container, Img, Content, Details, Icons,  Divider } from './style'


export const HouseCard =({data = {}, gap, onClick} )=>{
  const { attachments, city, country, description, salePrice, price, address, houseDetails, favorite, category } = data;
  
  const save = (e) => {
    e?.stopPropagation();
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("Successfully disliked");
        else res?.success && message.info("Successfully liked");
        refetch && refetch();
      });
  };

  return(
    <div style={{display: 'flex'}} onClick={onClick}>
    <Container gap={gap} >
      <Img src={(attachments && attachments[0])?.imgPath || noimg}/>
      <Content>
        <div className="subTitle inline">{city}, {country}, {description}</div>
        <div className="info">{address || 'Quincy St, Brooklyn, NY, USA'} - {category?.name || 'Category'} {houseDetails?.room || 0}-rooms</div>
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
            <Icons.Love onClick={save} favorite={favorite} />
        </Details.Items>
      </Content>
     
    </Container>
          </div>
  )
}
export default HouseCard