import React from "react";
import { Container } from './style'
import { useEffect } from "react";
import HouseCard from '../HouseCard'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env


export const Favourite = () => {

  const [data, setData] = useState([]);
  const { search } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${url}/houses/getAll/favouriteList`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")},`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data)
      })
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <>
      <div className="title">Favourite</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data?.length ? (data.map((value) => {
          return <HouseCard
            onClick={() => onSelect(value.id)}
            key={value.id} data={value} />
        }) ) : (
            <h1> No Data Found</h1>
        )
      }
      </Container>
    </>
  )
}
export default Favourite