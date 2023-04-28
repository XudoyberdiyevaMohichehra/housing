import React, { useContext } from "react";
import { Container } from './style'
import HouseCard from '../HouseCard'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/properties";

const { REACT_APP_BASE_URL: url } = process.env


export const Favourite = () => {

  // const [ setData] = useState([]);
  const { search } = useLocation()
  const navigate = useNavigate()
  const [ dispatch] = useContext(PropertiesContext);

  // const { refetch, data } = useQuery([search], () => {
  //   return fetch(`${url}/houses/getAll/favouriteList`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")},`
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data);
  //       dispatch({type: "refetch", payload: refetch});
  //     })
  // });

  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(`${url}/houses/getAll/favouriteList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return await res.json();
    },

    {
      onSuccess: (res) => {
        // setData(res?.data || []);
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );


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
        {data?.data?.length ? (data?.data.map((value) => {
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