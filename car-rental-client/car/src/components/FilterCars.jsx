import {Car} from "./Car"
import { useEffect, useRef, useState } from "react"
import './style_search.css'
import { getCars, getCity, getDriveType, getTypeVehicle } from "../data/api";
import ToFilter from "./ToFilter"
export const FilterCars = ()=>
{
    const [cars,setCars] = useState()
    const[ type,setType] = useState()
    const[cities,setCities] = useState()
    const [selectedCity, setSelectedCity] = useState("")
    const [selectedType, setSelectedType] = useState(0)
    const [search,setSearch] = useState({})

    useEffect(()=>
    {
        getCars().
        then(x=>
        {
        const c=x.data
        setCars(c)
        }
        )
        .catch(e=>
        console.log(e)
        );

        getCity().then(x=>
        {
            const c=x.data
            setCities(c)
        }
        )
        .catch(e=>
            console.log(e)
        );
        getTypeVehicle().then(x=>
            {
                console.log("kkk")
                const a=x.data
                setType(a)
                console.log(type)
            }
            )
            .catch(e=>
                console.log(e)
            );
        },[]
    )
     const match=(car)=>
     {
      return (search.city == undefined || search.city ==-1 || search.city == car.city_code) && (search.type == undefined||search.type == -1 || car.typeVehicles_code == search.type) && (search.number_of_seats==undefined || parseInt(search.number_of_seats) <= car.numberOfSeats)  
     }
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
return <>
<img src={process.env.PUBLIC_URL+'/images/catalog_img.png'} id="myimg"></img>
<div id="search">
<br></br>   <br></br>
    {cities && <ToFilter id="sc" text={"city"} search ={search} setSearch={setSearch} list={cities}></ToFilter>}
    <br></br>   <br></br>
    {type && <div id="st"><ToFilter  text={"drive"} search ={search} setSearch={setSearch} list={type}></ToFilter></div>}
    </div>
        <div id ='cars_list'>
    {cars && cars.map((car)=>
    
        match(car) &&
    <Car car = {car} father ={"filterCars"}></Car>
  
    )
}

</div>
</>
}