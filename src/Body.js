import React from "react";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

import { resList } from "../utils/mockData";


const Body = () => {
  const [list,Setlist] = useState(resList)
  return (
    <div className="body">
    <div className="filter">
      <button className="filter-btn"
       onClick={()=>{
        const lists = resList.filter((res)=> res.data.avgRating >4 );
     

        Setlist(lists)
      }}>4 star Rating</button>
      <button className="filter-btn"
       onClick={()=>{
        const lists = resList.filter((res)=> res.data.avgRating >3.2 );
       

        Setlist(lists)
      }}>3.2star Rating</button>
     


</div>
      <div className="res-container">
      {
      list.map(res => <RestaurentCard key={res.data.id} resData ={res}/>)
      
      }
      </div>
    </div>
  );
};

export default Body;
