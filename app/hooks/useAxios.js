import React, { useState } from "react";
import axios from "axios";
const useAxios = () => {
 // data State
 const [pizzas, setpizzas] = useState([]);
 // loading State
 const [loading, setloading] = useState(0);

 const getPizzas = async () => {
  setloading(true);
  try {
   const { data, status } = await axios.request({
    // url: "https://hub.dummyapis.com/delay?seconds=1",
    url: "https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg",
    // url: "https://dummyjson.com/products",
    method: "get",
    responseType: "blob",
    onDownloadProgress: (progressEvent) => {
     const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
     console.log(percentage);
     setloading(percentage);
    },
   });
   if (status === 200) {
    console.log("Data Complete");
    setpizzas(data);
   }
  } catch (error) {
   console.error(error);
  }
 };
 return { getPizzas, pizzas, loading };
};

export default useAxios;
