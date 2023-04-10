import React from "react";
import { useId } from 'react';
import {Container} from './style'
import { useEffect } from "react";
import HouseCard from '../HouseCard'
import { useState } from "react";
const { REACT_APP_BASE_URL: url } = process.env


export const Property =()=>{
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(`${url}/houses/list?address=Tashkent`)
    .then((res) => res.json())
    .then((res) => {
         setData(res?.data)
     })     
  },[]);
  return(
    <Container>
          {data.map((value, index)=>{
            return <HouseCard key={index} data={value}/>
          })}
    </Container>
  )
}
export default Property