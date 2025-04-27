import { useState,useEffect } from "react"
import { getCars } from "../data/api";
import { Car } from "./Car";
export const CityCar =({city,setCar})=>
{
    const [cars,setCars] = useState()
    console.log(city)
        useEffect(()=>
        {
            getCars().
            then(x=>
            {
            const c=x.data
            setCars(c)
            console.log(cars)
            }
            )
            .catch(e=>
            console.log(e)
            );
        },[])
    
    return<>
    {cars && cars.map((car,i)=>
        {
        
            <Car car={car} setCar={setCar}></Car>
        }
    )}
    </>
}