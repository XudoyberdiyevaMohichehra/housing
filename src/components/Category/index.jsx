import React , {useState}from "react";
import { Container, Content } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


// const { REACT_APP_BASE_URL: url } = process.env


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

const mockDataCategory = [
  { id: 1, name: "Dom" },
  { id: 2, name: "Villa" },
  { id: 3, name: "House" },
  { id: 4, name: "Cottage" },
  { id: 5, name: "Elegant" },
  { id: 6, name: "VIP" },
];

export const Category = () => {
  
  const [data1, /* setData*/] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`${url}/categories/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  // }, []);
  // console.log(data);
  return (
    <Container>
      <Content>
        <h1 className="title">Category</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {data1?.length
          ? data1.map((v) => {
            return (
              <CategoryCard
                key={v?.id}
                onClick={() => navigate(`/properties?category=${v?.id}`)}
                data={v}
              />
            );
          })
          : mockDataCategory.map((v) => {
            return (
              <CategoryCard
                key={v?.id}
                onClick={() => navigate(`/properties?category=${v?.id}`)}
                data={v}
              />
            );
          })}
      </Slider>
    </Container>
  );
};

export default Category;



