import { Car } from "./Car"
import { useState,useEffect } from "react"
import './style_card.css'

import { getCars } from "../data/api";

export const Cars = ({rental,setRntal})=>
{
      const[cars,setCars]=useState()
      useEffect(()=>
        {
            getCars().then((x)=>
            {
            const c=x.data
            setCars(c)
            }
            )
            .catch(e=>
            console.log(e)
            );
        },[])
    
    return<>
    <div id ={"citycar"}>
        {cars && cars.map((car,i)=>
        car.city_code==rental.city && car.available &&
        <Car car = {car}></Car>)} 
    </div>
    </>
}