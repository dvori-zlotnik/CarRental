import { Route,Routes } from "react-router-dom"
import {Home} from "../components/Home"
import {FilterCars} from '../components/FilterCars'
import { StepLogin1 } from "../components/StepLogin1"
import { Manager } from "../components/Manager/Manger"
import { ManagerRegister } from "../components/ManagerRegister"
import { CommingSoon } from "../components/ComingSoon"
import { Payment } from "../components/payment"
import Questions from "../components/Questions"
import { Contact } from "../components/Contact"
import { Rental } from "../components/Rental"


export const Routing = () => {
    return <>
        <Routes>
        <Route path="home" element={<Home></Home>}> </Route>
        <Route path="" element={<Home></Home>}> </Route>
        <Route path="login" element={<StepLogin1></StepLogin1>}></Route>
        <Route path="payment" element={<Payment></Payment>}></Route>
        <Route path = "AddRental/:car" element ={<Rental></Rental>}></Route>
        <Route path = "search_car" element = {<FilterCars></FilterCars>}></Route>
        <Route path = "manager" element ={<Manager></Manager>}></Route>
        <Route path = "ManagerRegister" element ={<ManagerRegister></ManagerRegister>}></Route>
        <Route path = "comingsoon" element ={<CommingSoon></CommingSoon>}></Route>
        <Route path = "questions" element ={<Questions></Questions>}></Route>
        <Route path = "contact" element ={<Contact></Contact>}></Route>

        </Routes>
    </>
}