import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
// import {data} from '../../utils/data'

const { REACT_APP_BASE_URL: url } = process.env


const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1> {dots} </h1>,
};

export const HouseListdata = [
  { id: 1, name: 'Villa' },
  { id: 2, name: 'Dom' },
  { id: 3, name: 'Hovli' },
  { id: 4, name: 'Dacha' },
  { id: 5, name: 'Villa' },
  { id: 4, name: 'Dacha' },
  { id: 5, name: 'Villa' },
  { id: 4, name: 'Dacha' },
  { id: 5, name: 'Villa' },
]

export const Recommended = () => {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
  console.log(data);
  return (
    <Container>
      <Content>
        <h1 className="title">Recommended</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {/* {data.map((value, index) => {
          return (
            <HouseCard
              key={index}
              gap={20}
              onClick={() => navigate(`/properties/${value.id}`)}
              data={value}
            />
          );
        })} */}
        {data.length ? data.map((value, index) => {
          return (
            <HouseCard
              key={index}
              gap={10}
              onClick={() => navigate(`/properties/${value.id}`)}
              data={value}
            />
          );
        }) : HouseListdata.map((value, index) => {
          return (
            <HouseCard
              key={index}
              gap={10}
              onClick={() => navigate(`/properties/${value.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;



