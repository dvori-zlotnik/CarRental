import { useSelector } from "react-redux"
import { AddCompany } from "./add/AddCompay"
import { addCar, addCity, addCompany, addDriveType, addModel, addTypeVehicle } from "../data/api";

export const Stam =()=>
{     let companies=
    [
        {code:1,name:"volvo",image:volvo},
        {code:2,name:"mercedes",image:mercedes},
        {code:3,name:"honda",image:honda},
        {code:4,name:"porsche",image:porsche},
        {code:5,name:"jaguar",image:jaguar},
        {code:6,name:"jeep",image:jeep},
        {code:7,name:"bmw",image:bmw},
        {code:8,name:"tesla",image:tesla},
        {code:9,name:"infiniti",image:infiniti},
        {code:10,name:"opel",image:opel},
        {code:11,name:"toyota",image:toyota},
        {code:12,name:"audi",image:audi}
    ]
   let cities=
    [
        {code:1,name:"ירושלים"},
        {code:2,name:"הרצליה"},
        {code:3,name:"ראשון לציון"},
        {code:4,name:"רפיח"},
        {code:5,name:"בני ברק"},
        {code:6,name:"נתניה"},
    ]
    let  car_model=
    [
        {code:1,codeCompany:1,model_name:"c40",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '},
        {code:2,codeCompany:1,model_name:"s90",driveType_code:1,typeVehicles_code:2,driveType:" ",typeVehicles:"",company:'',image_company:' '},
        {code:3,codeCompany:2,model_name:"CLA",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '},
        {code:4,codeCompany:2,model_name:"A class",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '},
        {code:5,codeCompany:3,model_name:"jazz-hybrid",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '},
        {code:6,codeCompany:3,model_name:"hr-v",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '},
       // {code:7,codeCompany:3,model_name:"bimba",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '},
        {code:8,codeCompany:4,model_name:"porsche-911",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '},
        {code:9,codeCompany:4,model_name:"porsche-taycan",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '},
        {code:10,codeCompany:5,model_name:"jaguar-i-pace",driveType_code:1,typeVehicles_code:2,driveType:"",typeVehicles:"",company:'',image_company:' '}
    ]
    let drive_type = 
    [
       {code:1,description:"Hybrid"} ,
       {code:1,description:"electricity"},
       {code:1,description:"gas"},
       {code:1,description:"diesel"} ,
       {code:1,description:"fuel"}
    ]
    let   cars= [
        {image_company:'',company:'',code:1,numberOfSeats:5,gear:true,image:"volvo-s90-2017.jpg",year:2017,available:true,codeModel:2,city_code:1,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
        {image_company:'',company:'',code:2,numberOfSeats:5,gear:true,image:"volvo-c40-new.jpg",year:2024,available:true,codeModel:1,city_code:6,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
        {image_company:'',company:'',code:3,numberOfSeats:5,gear:true,image:"mercedes-a-class-new.jpg",year:2017,available:true,codeModel:4,city_code:5,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
        {image_company:'',company:'',code:4,numberOfSeats:5,gear:true,image:"mercedes-cla-new.jpg",year:2024,available:true,codeModel:3,city_code:3,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
        {image_company:'',company:'',code:10,numberOfSeats:5,gear:true,image:"honda-hr-v-new.jpg",year:2017,available:true,codeModel:6,city_code:4,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
        {image_company:'',company:'',code:5,numberOfSeats:5,gear:true,image:"honda-jazz-hybrid-new.jpg",year:2024,available:true,codeModel:5,city_code:2,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
       // {image_company:'',company:'',code:6,numberOfSeats:1,gear:true,image:bimba,year:2024,available:true,codeModel:7,city_code:4,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
        {image_company:'',company:'',code:7,numberOfSeats:5,gear:true,image:"porsche-911-new.jpg",year:2024,available:true,codeModel:8,city_code:1,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
        {image_company:'',company:'',code:8,numberOfSeats:5,gear:true,image:"porsche-taycan-new.jpg",year:2024,available:false,codeModel:9,city_code:3,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''},
        {image_company:'',company:'',code:9,numberOfSeats:5,gear:true,image:"jaguar-i-pace-new.jpg",year:2024,available:true,codeModel:10,city_code:4,licensePlate:'',city:'',pricePerHour:1,consumptionPerKm:1,balanceInLiters:1,model_name:'',driveType:'',typeVehicles:''}
    ]
    let types_of_vehicles=
    [
        {code:1,description:"A"},
        {code:2,description:"B"}
    ]
    const addco = ()=>
    {    
    companies.forEach(element => {
        addCompany(element)
    });

    }
    const addty = ()=>
     {
     drive_type.forEach(d=>
     addDriveType(d) )
    } 
    const addcity = ()=>
    {
     cities.forEach(c=>
    addCity(c))
     } 
       const addtype = ()=>
        {
        types_of_vehicles.forEach(element => {
             addTypeVehicle(element) });
        } 
   const addmodel = ()=>
     {
     car_model.forEach(element => {
     addModel(element)});
      }
      const addcar = ()=>
        {
        cars.forEach(element => {
        addCar(element)});
         }

    return<>
    <input type="buttom" onClick={()=>addco()} >סוג להוספה</input>
    </>
}