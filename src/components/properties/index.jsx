import React from "react";
import {Container} from './style'
import { useEffect } from "react";
import HouseCard from '../HouseCard'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env


export const Property =()=>{
  const [data, setData] = useState([]);
  const {search} = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`${url}/houses/list${search}`)
    .then((res) => res.json())
    .then((res) => {
         setData(res?.data)
     })     
  },[search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

   const HouseListdata = [
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

  return(
    <>
      <div className="title">Properties</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
    <Container>
          {/* {data.map((value)=>{
            return <HouseCard 
            onClick={()=>onSelect(value.id)}
            key={value.id} data={value}/>
          })} */}
        {data.length ? data.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        }) : HouseListdata.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
    </Container>
          </>
  )
}
export default Property